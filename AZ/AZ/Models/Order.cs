using System.ComponentModel.DataAnnotations.Schema;

namespace AZ.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public int Time { get; set; }

        public Pitch Pitch { get; set; }
    }



}
