

using AZ.Data;
using AZ.Models;
using Microsoft.EntityFrameworkCore;

namespace AZ.Repository;

public class PitchRepository
{
    private readonly AzDbContext azDbContext;

    public PitchRepository(AzDbContext azDbContext)
    {
        this.azDbContext = azDbContext;
    }

    public async Task<Pitch> AddAsync(Pitch pitch)
    {
        pitch.Id = Guid.NewGuid();
        await azDbContext.AddAsync(pitch);
        await azDbContext.SaveChangesAsync();
        return pitch;
    }

    public async Task<Pitch> DeleteAsync(Guid id)
    {
        var pitch = await azDbContext.Pitch.FirstOrDefaultAsync(x => x.Id == id);

        if (pitch == null)
        {
            return null;
        }

        // Delete the region
        azDbContext.Pitch.Remove(pitch);
        await azDbContext.SaveChangesAsync();
        return pitch;
    }
    public async Task<IEnumerable<Pitch>> GetAllAsync()
    {
        return await azDbContext.Pitch.ToListAsync();
    }

    public async Task<Pitch> GetAsync(Guid id)
    {
        return await azDbContext.Pitch.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<Pitch> UpdateAsync(Guid id, Pitch pitch)
    {
        var pitchUpdate = await azDbContext.Pitch.FirstOrDefaultAsync(x => x.Id == id);

        if (pitch == null)
        {
            return null;
        }

        pitchUpdate.Name = pitch.Name;



        await azDbContext.SaveChangesAsync();

        return pitchUpdate;
    }

}