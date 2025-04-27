using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        [HttpGet("not-found")]
        public IActionResult GetNotFound()
        {
            // 404 Not Found
            return NotFound();
        }
        
        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            // 400 Bad Request
            return BadRequest("This is not a good request");
        }
        
        [HttpGet("unauthorized")]
        public IActionResult GetUnauthorized()
        {
            // 401 Unauthorized
            return Unauthorized();
        }
        
        [HttpGet("validation-error")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first error");
            ModelState.AddModelError("Problem2", "This is the second error");
            // 400 Bad Request + different validation errors for this request
            return ValidationProblem();
        }
        
        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            // 500 Internal Server Error
            throw new Exception("This is a server error");
        }
    }
}
