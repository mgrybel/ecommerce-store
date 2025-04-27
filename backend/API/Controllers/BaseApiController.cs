using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")] // e.g. path: https://localhost:5001/api/products
    [ApiController]
    public class BaseApiController : ControllerBase
    {
    }
}
