using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VoxConnex.Models
{
    public class QuoteQuestionnaire
    {
        public int Id { get; set; }

        [Required]
        public int HowManyUsers { get; set; }
        public bool NeedPhones { get; set; }
        public bool NeedNumber { get; set;}
        public int HowManyNumbersPorting { get; set; }
        public int HowManyLocations { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string Street1 { get; set; }
        public string Street2 { get; set; }
        public string CityName { get; set; }
        public string State { get; set; }
        public int Zipcode { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool AcceptTerms { get; set; }
    }
}