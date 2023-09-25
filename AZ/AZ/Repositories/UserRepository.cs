

using AZ.Data;
using AZ.Models;
using Microsoft.EntityFrameworkCore;

namespace AZ.Repository;

public class UserRepository
{
    private readonly AzDbContext azDbContext;

    public UserRepository(AzDbContext azDbContext)
    {
        this.azDbContext = azDbContext;
    }

    public async Task<User> AddAsync(User user)
    {
        user.Id = Guid.NewGuid();
        await azDbContext.AddAsync(user);
        await azDbContext.SaveChangesAsync();
        return user;
    }

    public async Task<User> DeleteAsync(Guid id)
    {
        var user = await azDbContext.User.FirstOrDefaultAsync(x => x.Id == id);

        if (user == null)
        {
            return null;
        }

        // Delete the region
        azDbContext.User.Remove(user);
        await azDbContext.SaveChangesAsync();
        return user;
    }
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await azDbContext.User.ToListAsync();
    }

    public async Task<User> GetAsync(Guid id)
    {
        return await azDbContext.User.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<User> UpdateAsync(Guid id, User user)
    {
        var userUpdate = await azDbContext.User.FirstOrDefaultAsync(x => x.Id == id);

        if (user == null)
        {
            return null;
        }

        userUpdate.Username = user.Username;
        userUpdate.Email = user.Email;
        userUpdate.Phone = user.Phone;
        userUpdate.Password = user.Password;


        await azDbContext.SaveChangesAsync();

        return userUpdate;
    }

}