import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import {
  createProductSchema,
  CreateProductSchema,
} from '../../schemas/createProductSchema';
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from '../../api/adminApi';
import { useFetchFiltersQuery } from '../../api/catalogApi';
import CustomSelectInput from '../../components/CustomSelectInput';
import CustomDropzone from '../../components/CustomDropzone';
import CustomTextInput from '../../components/CustomTextInput';
import { Product } from '../../models/product';
import { handleApiError } from '../../utils/utils';

type Props = {
  setEditMode: (value: boolean) => void;
  product: Product | null;
  refetch: () => void;
  setSelectedProduct: (value: Product | null) => void;
};

const ProductForm = ({
  setEditMode,
  product,
  refetch,
  setSelectedProduct,
}: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { isSubmitting },
  } = useForm<CreateProductSchema>({
    mode: 'onTouched',
    resolver: zodResolver(createProductSchema),
  });
  const watchFile = watch('file');
  const { data } = useFetchFiltersQuery();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (product) reset(product);

    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [product, reset, watchFile]);

  const createFormData = (items: FieldValues) => {
    const formData = new FormData();
    for (const key in items) {
      formData.append(key, items[key]);
    }

    return formData;
  };

  const onSubmit = async (data: CreateProductSchema) => {
    try {
      const formData = createFormData(data);

      if (watchFile) formData.append('file', watchFile);

      if (product)
        await updateProduct({ id: product.id, data: formData }).unwrap();
      else await createProduct(formData).unwrap();
      setEditMode(false);
      setSelectedProduct(null);
      refetch();
    } catch (error) {
      console.log(error);
      handleApiError<CreateProductSchema>(error, setError, [
        'brand',
        'description',
        'file',
        'name',
        'pictureUrl',
        'price',
        'quantityInStock',
        'type',
      ]);
    }
  };

  return (
    <Box padding={3}>
      <Box component={Paper} sx={{ p: 4, maxWidth: 'lg', mx: 'auto' }}>
        <Typography variant='h5' sx={{ mb: 4, textTransform: 'uppercase' }}>
          Product details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <CustomTextInput
                control={control}
                name='name'
                label='Product name'
              />
            </Grid>
            <Grid size={6}>
              {data?.brands && (
                <CustomSelectInput
                  items={data.brands}
                  control={control}
                  name='brand'
                  label='Brand'
                />
              )}
            </Grid>
            <Grid size={6}>
              {data?.brands && (
                <CustomSelectInput
                  items={data.types}
                  control={control}
                  name='type'
                  label='Type'
                />
              )}
            </Grid>
            <Grid size={6}>
              <CustomTextInput
                type='number'
                control={control}
                name='price'
                label='Price in cents'
              />
            </Grid>
            <Grid size={6}>
              <CustomTextInput
                type='number'
                control={control}
                name='quantityInStock'
                label='Quantity in stock'
              />
            </Grid>
            <Grid size={12}>
              <CustomTextInput
                control={control}
                multiline
                rows={4}
                name='description'
                label='Description'
              />
            </Grid>
            <Grid size={12}>
              <CustomDropzone name='file' control={control} />
            </Grid>
            <Grid size={12}>
              {watchFile?.preview ? (
                <img
                  src={watchFile.preview}
                  alt='preview of image'
                  style={{ maxHeight: 200 }}
                />
              ) : product?.pictureUrl ? (
                <img
                  src={product?.pictureUrl}
                  alt='preview of image'
                  style={{ maxHeight: 200 }}
                />
              ) : null}
            </Grid>
          </Grid>
          <Box display='flex' justifyContent='space-between' sx={{ mt: 3 }}>
            <Button
              onClick={() => setEditMode(false)}
              variant='contained'
              color='inherit'
              id='cancel'
              data-testid='cancel'
            >
              Cancel
            </Button>
            <LoadingButton
              loading={isSubmitting}
              variant='contained'
              color='primary'
              type='submit'
              id='submit'
              data-testid='submit'
            >
              Submit
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ProductForm;
