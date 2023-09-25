using System.ComponentModel.DataAnnotations.Schema;

namespace AZ.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }

        public List<Pitch> Pitchs { get; set; }

        public List<Order> Orders { get; set; }

    }
}
