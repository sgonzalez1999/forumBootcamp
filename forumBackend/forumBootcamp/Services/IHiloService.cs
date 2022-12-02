using forumBootcamp.Models;


namespace forumBootcamp.Services
{
    public interface IHiloService
    {
    List<Hilo> Get();
    Hilo Get(string name);
    Hilo Create(Hilo hilo);
    void Remove(string name);
    void Update(string name, Hilo hilo);
    }
}
