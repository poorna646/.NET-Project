namespace JobApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using JobApi.Models;
using JobApi.Data;

[ApiController]
[Route("api/[controller]")]
public class JobController : ControllerBase
{
    private readonly AppDbContext _context;

    public JobController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetJobs()
    {
        var jobs = _context.Jobs.ToList();
        return Ok(jobs);
    }

}