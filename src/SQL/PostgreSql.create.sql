﻿




CREATE TABLE КартДоступ (
 primaryKey UUID NOT NULL,
 СправСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправДолж (
 primaryKey UUID NOT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправСотр (
 primaryKey UUID NOT NULL,
 ФИОСотр VARCHAR(255) NULL,
 СправДолж UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE База_Данных (
 primaryKey UUID NOT NULL,
 НомерКарты VARCHAR(255) NULL,
 СправУч UUID NOT NULL,
 КартДоступ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправРодит (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СправУч (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE КартДоступ ADD CONSTRAINT FK47e573308c533a7f3d4877ff930611b8db7fb919 FOREIGN KEY (СправСотр) REFERENCES СправСотр; 
CREATE INDEX Index47e573308c533a7f3d4877ff930611b8db7fb919 on КартДоступ (СправСотр); 

 ALTER TABLE СправСотр ADD CONSTRAINT FK16b7a5f6f06361e4bff31f21b8567463326ad9f9 FOREIGN KEY (СправДолж) REFERENCES СправДолж; 
CREATE INDEX Index16b7a5f6f06361e4bff31f21b8567463326ad9f9 on СправСотр (СправДолж); 

 ALTER TABLE База_Данных ADD CONSTRAINT FKc80c57e58f53e3a3f6f9510697f4d562ccffe201 FOREIGN KEY (СправУч) REFERENCES СправУч; 
CREATE INDEX Indexc80c57e58f53e3a3f6f9510697f4d562ccffe201 on База_Данных (СправУч); 

 ALTER TABLE База_Данных ADD CONSTRAINT FK8be0d69a479163c5ccd066a9c1ed07574a9bc9bb FOREIGN KEY (КартДоступ) REFERENCES КартДоступ; 
CREATE INDEX Index8be0d69a479163c5ccd066a9c1ed07574a9bc9bb on База_Данных (КартДоступ); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

