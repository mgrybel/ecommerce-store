import { Carousel } from 'react-responsive-carousel';
import { Box, Fab, Typography, useMediaQuery, useTheme } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const MainCarousel = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler) => (
          <Box
            onClick={onClickHandler}
            role='presentation'
            sx={{
              position: 'absolute',
              top: '50%',
              left: 22,
              padding: '5px',
              zIndex: '10',
            }}
          >
            <Fab
              color='primary'
              size='small'
              sx={{
                color: theme.palette.common.white,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
              id='previous'
              data-testid='previous'
            >
              <NavigateBefore />
            </Fab>
          </Box>
        )}
        renderArrowNext={(onClickHandler) => (
          <Box
            onClick={onClickHandler}
            role='presentation'
            sx={{
              position: 'absolute',
              top: '50%',
              right: 22,
              padding: '5px',
              zIndex: '10',
            }}
          >
            <Fab
              color='primary'
              size='small'
              sx={{
                color: theme.palette.common.white,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
              id='next'
              data-testid='next'
            >
              <NavigateNext />
            </Fab>
          </Box>
        )}
      >
        <Box>
          <img
            src='images/carousel/1.jpg'
            alt='Image'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color='white'
            padding='20px'
            borderRadius='4px'
            textAlign='left'
            position='absolute'
            top='46%'
            left={isSm ? '10%' : '0'}
            right={isSm ? undefined : '0'}
            margin={isSm ? undefined : '0 auto'}
            maxWidth={isSm ? undefined : '240px'}
            sx={{
              bgcolor: 'rgb(0, 0, 0, 0.1)',
            }}
          >
            <Typography fontWeight='bold' color={theme.palette.primary.main}>
              NEW ITEMS
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.common.white}
              sx={{ textTransform: 'uppercase' }}
            >
              Winter Sale
            </Typography>
            <Typography
              variant='body2'
              fontWeight='bold'
              color={theme.palette.primary.main}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src='images/carousel/2.jpg'
            alt='Image'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color='white'
            padding='20px'
            borderRadius='4px'
            textAlign='left'
            position='absolute'
            top='46%'
            left={isSm ? '10%' : '0'}
            right={isSm ? undefined : '0'}
            margin={isSm ? undefined : '0 auto'}
            maxWidth={isSm ? undefined : '240px'}
            sx={{
              bgcolor: 'rgb(0, 0, 0, 0.1)',
            }}
          >
            <Typography fontWeight='bold' color={theme.palette.primary.main}>
              NEW ITEMS
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.common.white}
              sx={{ textTransform: 'uppercase' }}
            >
              Winter Sale
            </Typography>
            <Typography
              variant='body2'
              fontWeight='bold'
              color={theme.palette.primary.main}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src='images/carousel/3.jpg'
            alt='Image'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color='white'
            padding='20px'
            borderRadius='4px'
            textAlign='left'
            position='absolute'
            top='46%'
            left={isSm ? '10%' : '0'}
            right={isSm ? undefined : '0'}
            margin={isSm ? undefined : '0 auto'}
            maxWidth={isSm ? undefined : '240px'}
            sx={{
              bgcolor: 'rgb(0, 0, 0, 0.1)',
            }}
          >
            <Typography fontWeight='bold' color={theme.palette.primary.main}>
              NEW ITEMS
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.common.white}
              sx={{ textTransform: 'uppercase' }}
            >
              Winter Sale
            </Typography>
            <Typography
              variant='body2'
              fontWeight='bold'
              color={theme.palette.primary.main}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src='images/carousel/4.jpg'
            alt='Image'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color='white'
            padding='20px'
            borderRadius='4px'
            textAlign='left'
            position='absolute'
            top='46%'
            left={isSm ? '10%' : '0'}
            right={isSm ? undefined : '0'}
            margin={isSm ? undefined : '0 auto'}
            maxWidth={isSm ? undefined : '240px'}
            sx={{
              bgcolor: 'rgb(0, 0, 0, 0.1)',
            }}
          >
            <Typography fontWeight='bold' color={theme.palette.primary.main}>
              NEW ITEMS
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.common.white}
              sx={{ textTransform: 'uppercase' }}
            >
              Winter Sale
            </Typography>
            <Typography
              variant='body2'
              fontWeight='bold'
              color={theme.palette.primary.main}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src='images/carousel/5.jpg'
            alt='Image'
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'cover',
              backgroundAttachment: 'fixed',
            }}
          />
          <Box
            color='white'
            padding='20px'
            borderRadius='4px'
            textAlign='left'
            position='absolute'
            top='46%'
            left={isSm ? '10%' : '0'}
            right={isSm ? undefined : '0'}
            margin={isSm ? undefined : '0 auto'}
            maxWidth={isSm ? undefined : '240px'}
            sx={{
              bgcolor: 'rgb(0, 0, 0, 0.1)',
            }}
          >
            <Typography fontWeight='bold' color={theme.palette.primary.main}>
              NEW ITEMS
            </Typography>
            <Typography
              variant='h3'
              color={theme.palette.common.white}
              sx={{ textTransform: 'uppercase' }}
            >
              Winter Sale
            </Typography>
            <Typography
              variant='body2'
              fontWeight='bold'
              color={theme.palette.primary.main}
            >
              Discover more
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};

export default MainCarousel;
