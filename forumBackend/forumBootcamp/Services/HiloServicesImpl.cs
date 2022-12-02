

using forumBootcamp.Models;
using Microsoft.Extensions.Hosting;
using System;
using System.Xml.Linq;


namespace forumBootcamp.Services
{
    public class HiloServicesImpl : IHiloService
    {
        static List<Hilo> _hilos = new List<Hilo>();
        

        Hilo IHiloService.Create(forumBootcamp.Models.Hilo hilo)
        {
            
            _hilos.Add(hilo);
            return hilo;
            
        }

        List<Hilo> IHiloService.Get()
        {
            return _hilos;
        }

        Hilo IHiloService.Get(string name)
        {
            return _hilos.Find(i => i.name == name);
        }
        void IHiloService.Remove(string name)
        {
            _hilos.Remove(_hilos.Find(i => i.name == name));
        }

        void IHiloService.Update(string name, Hilo hilo)
        {
            _hilos.Remove(_hilos.Find(i => i.name == name));
            _hilos.Add(hilo);
        }
    }
}
