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
        [Display(Name = "User Amount")]
        public int HowManyUsers { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "New Phone?")]
        public bool NeedPhones { get; set; }


        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "New Number?")]
        public bool NeedNumber { get; set; }

        //User will be sent to this question if NeedNumber is false
        [Display(Name = "Number Porting")]
        public int HowManyNumbersPorting { get; set; }

        [Display(Name = "Location Amount")]
        public int HowManyLocations { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Company Name")]
        [RegularExpression("/^[.@&]?[a - zA - Z0 - 9] +[!.@&()]?[a - zA - Z0 - 9!()] +/", ErrorMessage = "You must type in a valid company name.")]
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Contact Name")]
        [RegularExpression("/^[a-z ,.'-]+$/i", ErrorMessage = "Invalid name format.")]
        public string ContactName { get; set; }

        [Required(ErrorMessage = "Field can't be empty")]
        [Display(Name = "Street")]
        public string Street1 { get; set; }

        [Display(Name = "Apt")]
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



        [Required(ErrorMessage = "Field can't be empty")]
        public bool AcceptTerms { get; set; }

    }
}