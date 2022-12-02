using forumBootcamp.Models;
using forumBootcamp.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace forumBootcamp.Controllers
{



    [Route("api/[controller]")]
    [ApiController]
    public class AppController : ControllerBase
    {

        private IHiloService _hiloService;

        public AppController(IHiloService hiloService)
        {
            _hiloService = hiloService;
            Hilo a = new Hilo();
            a.name = "createdAutomaticallyInAppController";
            _hiloService.Create(a);
            Console.WriteLine("Se repite");
        }

        // GET: api/<AppController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = _hiloService.Get();
                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<AppController>/5
        [HttpGet("{name}")]
        public ActionResult<Hilo> Get(string name)
        {
            var hilo = _hiloService.Get(name);
            if (hilo == null)
            {
                return NotFound($"Hilo with NAME={name} not found");
            }
            return hilo;
        }

        Random rand = new Random();
        // POST api/<AppController>
        [HttpPost]
        public ActionResult<Hilo> Post([FromBody] Hilo hilo)
        {
            Hilo hilo1 = _hiloService.Get().FirstOrDefault(x => x.name.Equals(hilo.name));
            if (hilo1 != null)
            {
                return BadRequest("Title is already in use");
            }
            else
            {
                _hiloService.Create(hilo);
                return CreatedAtAction(nameof(Get), new { name = hilo.name }, hilo);
            }
        }

        // PUT api/<AppController>/5
        [HttpPut("{name}")]
        public ActionResult Put(string name, [FromBody] Hilo team)
        {
            var existingTeam = _hiloService.Get(name);
            if (existingTeam == null)
            {
                return NotFound($"Hilo with NAME={name} not found");
            }

            _hiloService.Update(name, team);
            return NoContent();
        }

        // DELETE api/<AppController>/5
        [HttpDelete("{name}")]
        public ActionResult Delete(string name)
        {
            var team = _hiloService.Get(name);
            if (team == null)
            {
                return NotFound($"Hilo with NAME={name} not found");
            }
            _hiloService.Remove(name);

            return Ok($"Hilo with NAME={name} deleted");

        }
    }
}
