Tutorial SAPUI5 Create, Read, Update, Delete with SAP HANA XS & SAP HANA DB Step by Step
- by: John Eswin Nizar
- updated by: Henrique Dias

1. Log On : https://account.hanatrial.ondemand.com/

2. Choose on the menu Presisetnce > Database & Schemas

   * Create a New HANA MDC (\<trial\>)
   * More information at [SCN Post](http://scn.sap.com/community/developer-center/cloud-platform/blog/2016/01/13/sap-hana-multitenant-database-containers-mdc-scenarios-now-on-trial-landscape)

3. Click : Open in Web-based Development Workbench

4. On the page SAP HANA Web-based Development Workbench : Catalog 
   Click drop down icon (+), choose Catalog

   * Right-click on Catalog and click on New Schema: "NEO_ALIEN"

5. Click icon SQL or Right-click on Catalog and click on Open SQL Console
  
6. On the tab untitled0.sql, paste script below:
   CREATE COLUMN TABLE "NEO_ALIEN"."PERSONAL" ("EMAIL" NVARCHAR(30), "FIRSTNAME" NVARCHAR(30), "LASTNAME" NVARCHAR(30), "AGE" NVARCHAR(3), "ADDRESS" NVARCHAR(50))

7. Fill the data into PERSONAL table, paste script below :
 INSERT INTO "NEO_ALIEN"."PERSONAL" VALUES( 'dirk.brian@example.com', 'Dirk', 'Brian', '49', 'Exeter, England');

8. Back to page SAP HANA Web-based Development Workbench : Editor
   - Click Content -> public
   - Right click : Choose New > Package
      - Package Name : contacts  
   - Right click contacts: Choose Create Aplication
      - Template: Empty application (with XSAccess and XSApp)
      - Package: public.contacts

   * Download this repo zip
   * Right click contacts: Choose Import > Archive

9. Test it
   * Click on menu.html 
   * and Click on Play (green button at the toolbar)

10. Enjoy!

Reference: [SAP HANA Web Workbench Dev Guide](http://help.sap.com/hana/SAP_HANA_Developer_Guide_for_SAP_HANA_Web_Workbench_en.pdf)
