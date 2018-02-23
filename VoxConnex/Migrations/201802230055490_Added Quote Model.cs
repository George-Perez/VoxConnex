namespace VoxConnex.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedQuoteModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.QuoteQuestionnaires",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        HowManyUsers = c.Int(nullable: false),
                        NeedPhones = c.Boolean(nullable: false),
                        NeedNumber = c.Boolean(nullable: false),
                        HowManyNumbersPorting = c.Int(nullable: false),
                        HowManyLocations = c.Int(nullable: false),
                        CompanyName = c.String(),
                        ContactName = c.String(),
                        Street1 = c.String(),
                        Street2 = c.String(),
                        CityName = c.String(),
                        State = c.String(),
                        Zipcode = c.Int(nullable: false),
                        PhoneNumber = c.String(),
                        Email = c.String(),
                        AcceptTerms = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.QuoteQuestionnaires");
        }
    }
}
