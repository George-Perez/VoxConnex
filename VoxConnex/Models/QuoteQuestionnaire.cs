using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VoxConnex.Models
{
    public class QuoteQuestionnaire
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "How many users do you want to add?")]
        public int HowManyUsers { get; set; }

        [Required]
        [Display(Name = "Will team members require new phones?")]
        public bool NeedPhones { get; set; }

        [Display(Name = "Keep your existing number?")]
        public bool NeedNumber { get; set; }

        //User will be sent to this question if NeedNumber is false
        [Display(Name = "How many numbers are being ported?")]
        public int? HowManyNumbersPorting { get; set; }

        [Display(Name = "Location Amount")]
        public int HowManyLocations { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Company Name")]
        //[RegularExpression("/^[.@&]?[a - zA - Z0 - 9] +[!.@&()]?[a - zA - Z0 - 9!()] +/", ErrorMessage = "You must type in a valid company name.")]
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Contact Name")]
        //[RegularExpression("/^[a-z ,.'-]+$/i", ErrorMessage = "Invalid name format.")]
        public string ContactName { get; set; }

        //DISABLED FOR NOW Do we really need their phyiscal address or can you call them later?
        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Street")]
        public string Street1 { get; set; }

        [Display(Name = "Ste,Bldg,Mail Stop(Optional)")]
        public string Street2 { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "City")]
        public string CityName { get; set; }

        [Display(Name = "State")]
        public string State { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Zipcode")]
        public int Zipcode { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Phone Number")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        //Disabled accept terms until you have terms to accept
        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "")]
        public bool AcceptTerms { get; set; }

    }
}