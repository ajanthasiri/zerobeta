--------------------------------------------------------
--  File created - Thursday-October-13-2022   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table USERS
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."USERS" 
   (	"ID" NUMBER(10,0) GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"ADDRESS" VARCHAR2(255 CHAR), 
	"FIRST_NAME" VARCHAR2(255 CHAR), 
	"LAST_NAME" VARCHAR2(255 CHAR), 
	"PASSWORD" VARCHAR2(255 CHAR), 
	"ROLE" VARCHAR2(255 CHAR), 
	"USERNAME" VARCHAR2(255 CHAR),
  PRIMARY KEY ("ID"),
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.USERS
SET DEFINE OFF;
Insert into SYSTEM.USERS (ID,ADDRESS,FIRST_NAME,LAST_NAME,PASSWORD,ROLE,USERNAME) values (1,'monaragala','aj','gm','$2a$10$c.Mx/8mP.gQ75VoY5z4qn.AIwtykB8hxHrfHG/kCOXb4DN1F1M4sK','client','aj');
--------------------------------------------------------
--  DDL for Index SYS_C009071
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."SYS_C009071" ON "SYSTEM"."USERS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table USERS
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."USERS" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."USERS" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;

--------------------------------------------------------
--  File created - Thursday-October-13-2022   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ORDERS
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."ORDERS" 
   (	"ID" NUMBER(10,0) GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"CLIENT_ID" NUMBER(10,0), 
	"ITEM_NAME" VARCHAR2(255 CHAR), 
	"ORDER_STATUS" NUMBER(3,0), 
	"QUANTITY" NUMBER(10,0), 
	"SHIPPING_ADDRESS" VARCHAR2(255 CHAR), 
	"TOTAL_COST" FLOAT(126),
  PRIMARY KEY ("ID"),
  FOREIGN KEY ("CLIENT_ID") REFERENCES USERS("ID")
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;

   COMMENT ON COLUMN "SYSTEM"."ORDERS"."ORDER_STATUS" IS '1 - new, 2 - dispatched, 3 - cancelled';
REM INSERTING into SYSTEM.ORDERS
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index SYS_C009069
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."SYS_C009069" ON "SYSTEM"."ORDERS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table ORDERS
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."ORDERS" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."ORDERS" MODIFY ("CLIENT_ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."ORDERS" MODIFY ("ORDER_STATUS" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."ORDERS" MODIFY ("QUANTITY" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."ORDERS" MODIFY ("TOTAL_COST" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."ORDERS" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
