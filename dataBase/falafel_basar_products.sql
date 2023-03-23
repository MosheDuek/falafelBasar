-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: falafel_basar
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `img_link` varchar(255) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`idproducts`),
  UNIQUE KEY `idproducts_UNIQUE` (`idproducts`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'פלאפל בשר','מנת פלאפל ממולאת בבשר טעימה מאוד עשירה בטעמים מהבשר הכי משובח בשוק והפלאפל הכי טעים שתטעמו','מנת פלאפל ממולאת בבשר טעימה מאוד','falafelBasar_1670425461117-158420637.jpg',30),(2,'עראיס','רבעי פיתות ממולאים בבשר איכותי בעשייה ישירות על האש\"','רבעי פיתות ממולאים בבשר בגימור על האש\"','arais_1670428412032-519998955.png',35),(3,'פיצה בשר','פיצה עם גבינה טבעונית ובשר טחון משובך ביותר בכשרות מהדרין','פיצה עם גבינה טבעונית בתוספת בשר\"','pizzaBasar_1670428312587-957146001.png',55),(4,'פלאפל','מנת פלאפל הכי טעימה ועשירה בטעמים בעולם','מנת פלאפל רגילה עם ירקות מעודנים וטעימים\"','falafelBasar_1670426735353-906337588.jpg',40),(6,'חומוס','חומוס גרגירים שלא טעמתם מעולם מגיע עם פיתות ביצה חמוצים ושתייה','החומוס של פלאפל בשר','humus_1670430747473-217714462.png',45),(7,'שתייה קלה','קולה, ענבים, תפוזים, מנגו, תפוח, מים אפילו ברד בריפיל בימים החמים של הקיץ','כל סוגי השתייה','drink_1670431039107-785508452.png',12);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29 15:58:16
