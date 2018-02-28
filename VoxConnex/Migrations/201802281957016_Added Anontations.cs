namespace VoxConnex.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedAnontations : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.QuoteQuestionnaires", "CompanyName", c => c.String(nullable: false));
            AlterColumn("dbo.QuoteQuestionnaires", "ContactName", c => c.String(nullable: false));
            AlterColumn("dbo.QuoteQuestionnaires", "Street1", c => c.String(nullable: false));
            AlterColumn("dbo.QuoteQuestionnaires", "CityName", c => c.String(nullable: false));
            AlterColumn("dbo.QuoteQuestionnaires", "PhoneNumber", c => c.String(nullable: false));
            AlterColumn("dbo.QuoteQuestionnaires", "Email", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.QuoteQuestionnaires", "Email", c => c.String());
            AlterColumn("dbo.QuoteQuestionnaires", "PhoneNumber", c => c.String());
            AlterColumn("dbo.QuoteQuestionnaires", "CityName", c => c.String());
            AlterColumn("dbo.QuoteQuestionnaires", "Street1", c => c.String());
            AlterColumn("dbo.QuoteQuestionnaires", "ContactName", c => c.String());
            AlterColumn("dbo.QuoteQuestionnaires", "CompanyName", c => c.String());
        }
    }
}
