using FullStackAPI.Data;
using FullStackAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly FullstackDbContext _context;
        public EmployeeController(FullstackDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var ListOfemployees = await _context.EmployeesTabel.ToListAsync();
            return Ok(ListOfemployees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee empData)
        {
            empData.Id = Guid.NewGuid();
            await _context.EmployeesTabel.AddAsync(empData);
            await _context.SaveChangesAsync();
            return Ok(empData);
        }

        [HttpGet]
        [Route("id:Guid")]
        public async Task<IActionResult> GetEmployee(Guid id)
        {
            var data = await _context.EmployeesTabel.FirstOrDefaultAsync(x=>x.Id==id);
            if(data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpPut]
        [Route("id:Guid")]
        public async Task<IActionResult> UpdateEmployee( Guid id,Employee emp)
        {
            var data = await _context.EmployeesTabel.FindAsync(id);
            if(data == null)
            {
                return NotFound(id);
            }

            data.Name = emp.Name;
            data.Email = emp.Email;
            data.Salary = emp.Salary;
            data.Phone = emp.Phone;
            data.Department = emp.Department;

            await _context.SaveChangesAsync();
            return Ok(data);
        }

        [HttpDelete]
        [Route("id:Guid")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            var data = await _context.EmployeesTabel.FindAsync(id);
            if(data == null)
            {
                return NotFound();
            }
            _context.EmployeesTabel.Remove(data);
            await _context.SaveChangesAsync();
            return Ok(data);
        }
    }
}
