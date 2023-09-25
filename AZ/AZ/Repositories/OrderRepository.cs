

using AZ.Data;
using AZ.Models;
using Microsoft.EntityFrameworkCore;

namespace AZ.Repository;

public class OrderRepository
{
    private readonly AzDbContext azDbContext;

    public OrderRepository(AzDbContext azDbContext)
    {
        this.azDbContext = azDbContext;
    }

    public async Task<Order> AddAsync(Order order)
    {
        order.Id = Guid.NewGuid();
        await azDbContext.AddAsync(order);
        await azDbContext.SaveChangesAsync();
        return order;
    }

    public async Task<Order> DeleteAsync(Guid id)
    {
        var order = await azDbContext.Order.FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return null;
        }

        // Delete the region
        azDbContext.Order.Remove(order);
        await azDbContext.SaveChangesAsync();
        return order;
    }
    public async Task<IEnumerable<Order>> GetAllAsync()
    {
        return await azDbContext.Order.ToListAsync();
    }

    public async Task<Order> GetAsync(Guid id)
    {
        return await azDbContext.Order.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Order> UpdateAsync(Guid id, Order order)
    {
        var orderUpdate = await azDbContext.Order.FirstOrDefaultAsync(x => x.Id == id);

        if (order == null)
        {
            return null;
        }

        orderUpdate.Name = order.Name;
        orderUpdate.Phone = order.Phone;
        orderUpdate.Time = order.Time;




        await azDbContext.SaveChangesAsync();

        return orderUpdate;
    }

}