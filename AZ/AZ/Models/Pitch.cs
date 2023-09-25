using System.ComponentModel.DataAnnotations.Schema;

namespace AZ.Models
{
    public class Pitch
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Status { get; set; }

        public List<Order> Orders { get; set; }

    }
}
