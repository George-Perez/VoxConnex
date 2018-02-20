using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using VoxConnex.Models;

namespace VoxConnex.Controllers
{
    public class QuoteQuestionnairesController : Controller
    {
        private VoxConnexContext db = new VoxConnexContext();

        // GET: QuoteQuestionnaires
        public ActionResult Index()
        {
            return View(db.QuoteQuestionnaires.ToList());
        }

        // GET: QuoteQuestionnaires/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuoteQuestionnaire quoteQuestionnaire = db.QuoteQuestionnaires.Find(id);
            if (quoteQuestionnaire == null)
            {
                return HttpNotFound();
            }
            return View(quoteQuestionnaire);
        }

        // GET: QuoteQuestionnaires/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: QuoteQuestionnaires/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,HowManyUsers,NeedPhones,NeedNumber,HowManyNumbersPorting,HowManyLocations,CompanyName,ContactName,Street1,Street2,CityName,State,Zipcode,PhoneNumber,Email,AcceptTerms")] QuoteQuestionnaire quoteQuestionnaire)
        {
            if (ModelState.IsValid)
            {
                db.QuoteQuestionnaires.Add(quoteQuestionnaire);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(quoteQuestionnaire);
        }

        // GET: QuoteQuestionnaires/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuoteQuestionnaire quoteQuestionnaire = db.QuoteQuestionnaires.Find(id);
            if (quoteQuestionnaire == null)
            {
                return HttpNotFound();
            }
            return View(quoteQuestionnaire);
        }

        // POST: QuoteQuestionnaires/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,HowManyUsers,NeedPhones,NeedNumber,HowManyNumbersPorting,HowManyLocations,CompanyName,ContactName,Street1,Street2,CityName,State,Zipcode,PhoneNumber,Email,AcceptTerms")] QuoteQuestionnaire quoteQuestionnaire)
        {
            if (ModelState.IsValid)
            {
                db.Entry(quoteQuestionnaire).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(quoteQuestionnaire);
        }

        // GET: QuoteQuestionnaires/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            QuoteQuestionnaire quoteQuestionnaire = db.QuoteQuestionnaires.Find(id);
            if (quoteQuestionnaire == null)
            {
                return HttpNotFound();
            }
            return View(quoteQuestionnaire);
        }

        // POST: QuoteQuestionnaires/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            QuoteQuestionnaire quoteQuestionnaire = db.QuoteQuestionnaires.Find(id);
            db.QuoteQuestionnaires.Remove(quoteQuestionnaire);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
