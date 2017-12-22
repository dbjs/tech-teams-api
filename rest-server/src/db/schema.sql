CREATE DATABASE Techteams

USE Techteams;

CREATE TABLE Users (
  UserID INT AUTO_INCREMENT NOT NULL,
  Name VARCHAR (50),
  Email VARCHAR (255),
  Password VARCHAR (255),
  Position VARCHAR (50),
  Techstack TEXT,
  Availability VARCHAR (50),
  Description TEXT,
  Location VARCHAR (255),
  Project INT,
  Imageurl TEXT,
  Title VARCHAR (50),
  PRIMARY KEY (UserID)
);

CREATE TABLE Projects (
  ProjectID INT AUTO_INCREMENT NOT NULL,
  Description TEXT,
  Headquarters VARCHAR (255),
  Imageurl TEXT,
  Techstack TEXT,
  Websites TEXT,
  Status VARCHAR (50),
  PRIMARY KEY (ProjectID)
);

CREATE TABLE Positions (
  PositionID INT AUTO_INCREMENT NOT NULL,
  User INT,
  Title VARCHAR (50),
  Requirements TEXT,
  Description TEXT,
  Project INT,
  Availability VARCHAR (50),
  PRIMARY KEY(PositionID)
);

CREATE TABLE Chats (
  ChatID INT AUTO_INCREMENT NOT NULL,
  Interviewer INT,
  Interviewee INT,
  Link TEXT,
  PRIMARY KEY (ChatID)
);

CREATE TABLE Notifications (
  NotificationID INT AUTO_INCREMENT NOT NULL,
  Type VARCHAR (100),
  User INT,
  Project INT,
  PRIMARY KEY (NotificationID)
)

ALTER TABLE Users ADD FOREIGN KEY (Project) REFERENCES Projects(ProjectID);
ALTER TABLE Notifications ADD FOREIGN KEY (User) REFERENCES Users(UserID);
ALTER TABLE Notifications ADD FOREIGN KEY (Project) REFERENCES Projects(ProjectID);
ALTER TABLE Chats ADD FOREIGN KEY (Interviewee) REFERENCES Users(UserID);
ALTER TABLE Chats ADD FOREIGN KEY (Interviewer) REFERENCES Users(UserID);
ALTER TABLE Positions ADD FOREIGN KEY (User) REFERENCES Users(UserID);
ALTER TABLE Positions ADD FOREIGN KEY (Project) REFERENCES Projects(ProjectID);
