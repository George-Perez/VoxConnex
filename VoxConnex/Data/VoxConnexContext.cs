using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VoxConnex.Models;

namespace VoxConnex.Data
{
    public class VoxConnexContext : DbContext
    {
        public VoxConnexContext () : base("DefaultConnection")
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<QuoteQuestionnaire> QuoteQuestionnaires { get; set; }
    }
}