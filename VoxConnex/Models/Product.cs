using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static VoxConnex.Models.QuoteQuestionnaire;

namespace VoxConnex.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Monthly { get; set; }
        public bool Tax { get; set; }

    }
}