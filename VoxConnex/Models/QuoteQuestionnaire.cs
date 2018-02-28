﻿using System;
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


        [Required]
        [Display(Name = "Keep your existing number?")]
        public bool NeedNumber { get; set; }

        //User will be sent to this question if NeedNumber is false
        [Display(Name = "Keep your exsisting phone number")]
        public int HowManyNumbersPorting { get; set; }

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