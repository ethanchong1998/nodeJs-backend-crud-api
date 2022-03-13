CREATE TABLE company(
    companyId int NOT NULL AUTO_INCREMENT,
    companyName varchar(255) NOT NULL,
    PRIMARY KEY(companyId)
)

CREATE TABLE staff(
    staffId int NOT NULL AUTO_INCREMENT,
    staffName varchar(255) NOT NULL,
    companyId int,
    PRIMARY KEY(staffId),
    FOREIGN KEY(companyId) REFERENCES company(companyId)
)