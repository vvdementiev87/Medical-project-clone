-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: dbbosom
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_group`
--

DROP TABLE IF EXISTS `access_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access_group` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_group`
--

LOCK TABLES `access_group` WRITE;
/*!40000 ALTER TABLE `access_group` DISABLE KEYS */;
INSERT INTO `access_group` VALUES (1,'admin','2023-04-02 22:36:22',NULL),(2,'user','2023-04-02 22:36:22',NULL),(3,'member','2023-04-02 22:36:22',NULL);
/*!40000 ALTER TABLE `access_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `access_group_has_user`
--

DROP TABLE IF EXISTS `access_group_has_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `access_group_has_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `group_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `access_group_has_user_group_id_foreign` (`group_id`),
  KEY `access_group_has_user_user_id_foreign` (`user_id`),
  CONSTRAINT `access_group_has_user_group_id_foreign` FOREIGN KEY (`group_id`) REFERENCES `access_group` (`id`) ON DELETE CASCADE,
  CONSTRAINT `access_group_has_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_group_has_user`
--

LOCK TABLES `access_group_has_user` WRITE;
/*!40000 ALTER TABLE `access_group_has_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_group_has_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_email_update` timestamp NULL DEFAULT NULL,
  `date_password_update` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accounts_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,'test@test.ru','$2y$10$M3ecedNblUL//bg6hVgo5OWSdofD.h/Br79VLgFcUOnAEb447BUSK',NULL,NULL,NULL,'2023-04-16 22:36:50'),(2,'vvdementiev87@gmail.com','$2y$10$WXIEqsaEK1XX/ljojtJwR.mW7/YHNzObA810sNdwa4lC3GQIhY7Me',NULL,NULL,NULL,NULL),(3,'test@test.by','$2y$10$hg7M7yd1TccC.PpxDS6HdeYlQPDC3J6IMYi/i0GC5G1vbLhsT0fEK',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `application_for_registration`
--

DROP TABLE IF EXISTS `application_for_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application_for_registration` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_date` date NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education_end` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialization` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `academic_rank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interests` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_member` tinyint(1) NOT NULL,
  `other_organization` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sign_for_news` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `application_for_registration_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application_for_registration`
--

LOCK TABLES `application_for_registration` WRITE;
/*!40000 ALTER TABLE `application_for_registration` DISABLE KEYS */;
INSERT INTO `application_for_registration` VALUES (2,'Duck','Duck','Duck','2023-03-26','test@test.com','+3751111111111111','11111, asdasdasd','asdasdasdasd','2222','asdasdasd','22','Duck','Duck','Duck','Duck','Междисциплинарный тренинг, Виртуальные и дистанционные технологии',0,NULL,0,'2023-04-16 22:38:12','2023-04-16 22:38:12');
/*!40000 ALTER TABLE `application_for_registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_html` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Tyrese1','commodidsgsdfgsdfg','Cum eveniet amet corporis repellendus deserunt non numquam sint voluptas voluptates repellat.fsdfsdfsdf','/images/articles/article1.jpg','Molestiae voluptatem quasi.','Quos est ducimus sed fugit eos impedit.','2023-04-02 22:36:23','2023-04-17 18:13:09'),(2,'Mara','doloremsdfgsdfg','Et ducimus porro necessitatibus esse suscipit at qui vitae.','/images/articles/article2.jpeg','Ex repellat voluptatum eligendi.','Quaerat sit sit nulla error quis consequatur magnam.','2023-04-02 22:36:23','2023-04-16 19:29:35'),(3,'Nat','ducimus','Incidunt debitis non temporibus praesentium culpa molestiae sit nulla.','/images/articles/article1.jpg','Et autem.','Quis sint voluptatum labore qui sint qui.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(4,'Richmond','non','Qui laboriosam et distinctio quas eos aut accusamus.','/images/articles/article2.jpeg','Est similique.','Ut eaque qui in velit atque soluta.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(5,'Nathen','ipsam','Quia ut aut odit molestiae sunt voluptas perferendis voluptatem laudantium enim.','/images/articles/article1.jpg','Sed et est provident.','Et aut atque accusantium harum veritatis quidem animi expedita natus enim aut dolores culpa.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(6,'Afton','praesentium','Voluptas quibusdam dolorum aut atque voluptate tempore quo ut in explicabo aut quae.','/images/articles/article2.jpeg','Autem voluptates sunt.','Excepturi ipsum sint a nihil nam rem sint rerum autem cum.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(7,'Enola','ut','Omnis laboriosam nisi hic adipisci accusamus aperiam.','/images/articles/article1.jpg','Autem eos quia dolorem.','Sed voluptatum tempora magni et id molestiae ad voluptatem sit inventore perspiciatis.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(8,'Judy','voluptatum','Eum et sed voluptas voluptas repellat quo neque.','/images/articles/article2.jpeg','Eveniet quam praesentium.','A excepturi consequatur ab velit facilis qui harum.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(9,'Hipolito','iusto','Sit veniam qui id id ut aut voluptatem incidunt in et debitis.','/images/articles/article1.jpg','Dignissimos iure ad dolor.','Cum voluptatibus qui ducimus a at qui velit officia doloribus a alias.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(10,'Stuart','possimus','Tempora et nesciunt ea soluta cupiditate rerum ratione aperiam eligendi ea reprehenderit.','/images/articles/article2.jpeg','Deserunt minus et non.','Et ut culpa quia vel possimus ut sapiente ut eaque magnam.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(11,'some author','Тест','какое-то содержание','/images/articles/article1.jpg','короткое описание','<strong>Some text</strong>','2023-04-16 19:48:25','2023-04-16 19:48:25');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'numquam','2023-04-09 20:51:40','2023-04-09 20:51:40'),(2,'iste','2023-04-09 20:51:40','2023-04-09 20:51:40'),(3,'eius','2023-04-09 20:51:40','2023-04-09 20:51:40'),(4,'impedit','2023-04-09 20:51:40','2023-04-09 20:51:40'),(5,'et','2023-04-09 20:51:40','2023-04-09 20:51:40'),(6,'minima','2023-04-09 20:51:40','2023-04-09 20:51:40'),(7,'libero','2023-04-09 20:51:40','2023-04-09 20:51:40'),(8,'velit','2023-04-09 20:51:40','2023-04-09 20:51:40'),(9,'tempora','2023-04-09 20:51:40','2023-04-09 20:51:40'),(10,'dolores','2023-04-09 20:51:40','2023-04-09 20:51:40');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `post_id` bigint unsigned NOT NULL,
  `author_id` bigint unsigned NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_post_id_foreign` (`post_id`),
  KEY `comments_author_id_foreign` (`author_id`),
  CONSTRAINT `comments_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (3,9,1,'Omnis rerum sed sint dolores voluptas ea qui.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(4,8,1,'Qui vel amet temporibus sunt perferendis fugit quisquam.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(5,4,1,'Tempore sit et id sit delectus aut ullam sunt.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(6,8,1,'Ea vero accusantium rerum aut fugiat dolore rem qui expedita laudantium eum corrupti corrupti.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(7,7,1,'Sunt voluptatibus fugit impedit libero aut assumenda saepe ullam.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(8,4,1,'Sapiente nam et voluptatum minus esse eligendi ea delectus itaque in error.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(18,5,1,'asdfasdf','2023-04-13 15:27:48','2023-04-13 15:27:48'),(19,14,1,'asdf','2023-04-13 15:28:03','2023-04-13 15:28:03'),(20,14,1,'asdf','2023-04-13 15:28:07','2023-04-13 15:28:07'),(26,4,1,'cvnvbn','2023-04-17 18:12:06','2023-04-17 18:12:06'),(27,3,1,'xnvcnb','2023-05-10 09:23:06','2023-05-10 09:23:06');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_center`
--

DROP TABLE IF EXISTS `community_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `community_center` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  `preview_photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` bigint NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `program_courses` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `community_center_category_id_foreign` (`category_id`),
  CONSTRAINT `community_center_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_center`
--

LOCK TABLES `community_center` WRITE;
/*!40000 ALTER TABLE `community_center` DISABLE KEYS */;
INSERT INTO `community_center` VALUES (21,'Симуляционный центр Алтайского ГМУ','Барнаул\nОБЩИЕ ПОЛОЖЕНИЯ СИМУЛЯЦИОННОГО ЦЕНТРА Симуляционный центр является многопрофильным подразделением и имеет специализированные филиалы на клинических базах. Центр аккредитации специалистов (...',1,'/images/centers/center1.png',43534,'lhartmann@gmail.com','optio','provident','2023-04-09 20:51:45','2023-04-09 20:51:45'),(22,'\nМультипрофильный аккредитационно-симуляционный центр департамента последипломного образования Новосибирского ГМУ','Новосибирск\nМежрегиональный симуляционно-аттестационный центр   является структурным подразделением ФГБОУ ВО «Новосибирского государственного медицинского университета Министерства зд...',2,'/images/centers/center2.png',51797,'lbrekke@hamill.info','a','asperiores','2023-04-09 20:51:45','2023-04-09 20:51:45'),(23,'Симуляционный центр Алтайского ГМУ','Барнаул\nОБЩИЕ ПОЛОЖЕНИЯ СИМУЛЯЦИОННОГО ЦЕНТРА Симуляционный центр является многопрофильным подразделением и имеет специализированные филиалы на клинических базах. Центр аккредитации специалистов (...',3,'/images/centers/center1.png',67684,'dariana24@swaniawski.com','iste','quia','2023-04-09 20:51:45','2023-04-09 20:51:45'),(24,'\nМультипрофильный аккредитационно-симуляционный центр департамента последипломного образования Новосибирского ГМУ','Новосибирск\nМежрегиональный симуляционно-аттестационный центр   является структурным подразделением ФГБОУ ВО «Новосибирского государственного медицинского университета Министерства зд...',4,'/images/centers/center2.png',39169,'hrau@hotmail.com','voluptates','molestiae','2023-04-09 20:51:45','2023-04-09 20:51:45'),(25,'Симуляционный центр Алтайского ГМУ','Барнаул\nОБЩИЕ ПОЛОЖЕНИЯ СИМУЛЯЦИОННОГО ЦЕНТРА Симуляционный центр является многопрофильным подразделением и имеет специализированные филиалы на клинических базах. Центр аккредитации специалистов (...',5,'/images/centers/center1.png',80948,'olindgren@gmail.com','quia','veniam','2023-04-09 20:51:45','2023-04-09 20:51:45'),(26,'\nМультипрофильный аккредитационно-симуляционный центр департамента последипломного образования Новосибирского ГМУ','Новосибирск\nМежрегиональный симуляционно-аттестационный центр   является структурным подразделением ФГБОУ ВО «Новосибирского государственного медицинского университета Министерства зд...',6,'/images/centers/center2.png',94450,'ahaley@wunsch.com','ad','rerum','2023-04-09 20:51:45','2023-04-09 20:51:45'),(27,'Симуляционный центр Алтайского ГМУ','Барнаул\nОБЩИЕ ПОЛОЖЕНИЯ СИМУЛЯЦИОННОГО ЦЕНТРА Симуляционный центр является многопрофильным подразделением и имеет специализированные филиалы на клинических базах. Центр аккредитации специалистов (...',7,'/images/centers/center1.png',85587,'littel.emerald@gmail.com','ut','eos','2023-04-09 20:51:45','2023-04-09 20:51:45'),(28,'\nМультипрофильный аккредитационно-симуляционный центр департамента последипломного образования Новосибирского ГМУ','Новосибирск\nМежрегиональный симуляционно-аттестационный центр   является структурным подразделением ФГБОУ ВО «Новосибирского государственного медицинского университета Министерства зд...',8,'/images/centers/center2.png',94398,'brendon.larson@yahoo.com','assumenda','aperiam','2023-04-09 20:51:45','2023-04-09 20:51:45'),(29,'Симуляционный центр Алтайского ГМУ','Барнаул\nОБЩИЕ ПОЛОЖЕНИЯ СИМУЛЯЦИОННОГО ЦЕНТРА Симуляционный центр является многопрофильным подразделением и имеет специализированные филиалы на клинических базах. Центр аккредитации специалистов (...',9,'/images/centers/center1.png',40267,'kulas.greyson@hotmail.com','incidunt','et','2023-04-09 20:51:45','2023-04-09 20:51:45'),(30,'\nМультипрофильный аккредитационно-симуляционный центр департамента последипломного образования Новосибирского ГМУ','Новосибирск\nМежрегиональный симуляционно-аттестационный центр   является структурным подразделением ФГБОУ ВО «Новосибирского государственного медицинского университета Министерства зд...',10,'/images/centers/center2.png',99021,'mitchell.edd@yahoo.com','voluptas','laboriosam','2023-04-09 20:51:45','2023-04-09 20:51:45');
/*!40000 ALTER TABLE `community_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `community_center_photos`
--

DROP TABLE IF EXISTS `community_center_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `community_center_photos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `community_center_id` bigint unsigned NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `community_center_photos_community_center_id_foreign` (`community_center_id`),
  CONSTRAINT `community_center_photos_community_center_id_foreign` FOREIGN KEY (`community_center_id`) REFERENCES `community_center` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `community_center_photos`
--

LOCK TABLES `community_center_photos` WRITE;
/*!40000 ALTER TABLE `community_center_photos` DISABLE KEYS */;
INSERT INTO `community_center_photos` VALUES (41,21,'/images/centers/center1.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(42,22,'/images/centers/center2.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(43,23,'/images/centers/center1.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(44,24,'/images/centers/center2.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(45,25,'/images/centers/center1.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(46,26,'/images/centers/center2.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(47,27,'/images/centers/center1.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(48,28,'/images/centers/center2.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(49,29,'/images/centers/center1.png','2023-04-09 20:59:16','2023-04-09 20:59:16'),(50,30,'/images/centers/center2.png','2023-04-09 20:59:16','2023-04-09 20:59:16');
/*!40000 ALTER TABLE `community_center_photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conferences`
--

DROP TABLE IF EXISTS `conferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conferences` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_start` timestamp NOT NULL,
  `date_end` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `program` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `all_places` bigint NOT NULL,
  `already_exist` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conferences`
--

LOCK TABLES `conferences` WRITE;
/*!40000 ALTER TABLE `conferences` DISABLE KEYS */;
INSERT INTO `conferences` VALUES (1,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','1991-10-14 17:14:57','1998-03-28 13:08:48','2023-04-02 22:45:33','2023-04-16 19:50:23',1,'Some program',0,0),(2,'Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','19-21 апреля 2023 года в гибридном формате состоится пятый юбилейный Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине» с международным участием, приуроченный к открытию R&D центра «SIMпрактика». ','/images/conferences/conference1.jpeg','г. Санкт-Петербург','2017-02-01 08:23:52','1978-09-26 03:30:40','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(3,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','2015-05-27 00:15:33','2013-04-29 09:47:52','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(4,'Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','19-21 апреля 2023 года в гибридном формате состоится пятый юбилейный Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине» с международным участием, приуроченный к открытию R&D центра «SIMпрактика». ','/images/conferences/conference1.jpeg','г. Санкт-Петербург','1977-10-15 04:21:36','2019-07-27 09:54:03','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(5,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','2002-09-16 11:23:09','1996-11-18 19:32:26','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(6,'Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','19-21 апреля 2023 года в гибридном формате состоится пятый юбилейный Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине» с международным участием, приуроченный к открытию R&D центра «SIMпрактика». ','/images/conferences/conference1.jpeg','г. Санкт-Петербург','1975-09-04 17:20:50','2019-02-03 18:17:25','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(7,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','2013-06-10 15:25:43','1984-12-17 01:21:55','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(8,'Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','19-21 апреля 2023 года в гибридном формате состоится пятый юбилейный Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине» с международным участием, приуроченный к открытию R&D центра «SIMпрактика». ','/images/conferences/conference1.jpeg','г. Санкт-Петербург','1989-03-09 12:10:41','2004-06-08 15:19:10','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(9,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','1983-10-26 15:30:25','2021-03-26 01:16:28','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(10,'Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине»','19-21 апреля 2023 года в гибридном формате состоится пятый юбилейный Ежегодный Всероссийский образовательный Форум «Наука и практика в медицине» с международным участием, приуроченный к открытию R&D центра «SIMпрактика». ','/images/conferences/conference1.jpeg','г. Санкт-Петербург','2016-11-23 23:30:10','1973-10-15 22:05:10','2023-04-02 22:45:33','2023-04-02 22:45:33',0,'',0,0),(60,'Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Межрегиональные соревнования «Форт АиР – 2023» для студентов 5-6 курсов медицинских ВУЗов и ординаторов по специальности «Анестезиология-реаниматология»','Вторые межрегиональные соревнования «Форт АиР – 2023» проводятся среди студентов 5-6 курсов медицинских ВУЗов, ординаторов и врачей по специальности «Анестезиология-реаниматология»','/images/conferences/conference2.png','г. Санкт-Петербург','2023-04-23 22:16:38','2023-04-26 22:16:38','2023-04-16 22:16:38','2023-04-17 08:03:44',1,'accusantium',17,1);
/*!40000 ALTER TABLE `conferences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `type` int NOT NULL,
  `type_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `favorites_user_id_foreign` (`user_id`),
  CONSTRAINT `favorites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (5,1,1,2,'2023-04-03 17:30:21','2023-04-03 17:30:21'),(6,1,1,1,'2023-04-17 18:10:21','2023-04-17 18:10:21'),(7,1,2,2,'2023-04-17 18:10:30','2023-04-17 18:10:30');
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `theme_id` bigint unsigned NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `gallery_theme_id_foreign` (`theme_id`),
  CONSTRAINT `gallery_theme_id_foreign` FOREIGN KEY (`theme_id`) REFERENCES `gallery_theme` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery_theme`
--

DROP TABLE IF EXISTS `gallery_theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gallery_theme` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_preview` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery_theme`
--

LOCK TABLES `gallery_theme` WRITE;
/*!40000 ALTER TABLE `gallery_theme` DISABLE KEYS */;
INSERT INTO `gallery_theme` VALUES (1,'atque','Numquam beatae distinctio delectus praesentium veritatis et consequuntur distinctio temporibus.','/images/gallery/gallery1.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(2,'sit','Deleniti voluptas perferendis voluptatibus sapiente est vel iure qui veniam porro officiis.','/images/gallery/gallery2.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(3,'delectus','Facilis debitis ullam autem modi omnis odit quis sit et.','/images/gallery/gallery1.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(4,'rerum','Amet quasi officiis est aut consectetur et.','/images/gallery/gallery2.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(5,'nihil','Sapiente est et sunt impedit rem dolorem quos ratione quidem ducimus.','/images/gallery/gallery1.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(6,'aliquid','Qui excepturi suscipit earum voluptas reprehenderit blanditiis enim.','/images/gallery/gallery2.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(7,'qui','Et laborum quo at aspernatur quos assumenda earum dolores eos et.','/images/gallery/gallery1.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(8,'reiciendis','Fugit quidem aut nam modi occaecati temporibus quo ut omnis debitis aliquid omnis laborum.','/images/gallery/gallery2.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(9,'omnis','Assumenda odit quibusdam cupiditate ut voluptas tempora reiciendis.','/images/gallery/gallery1.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25'),(10,'dignissimos','Magnam ipsa est delectus nisi quos suscipit sit error et vitae.','/images/gallery/gallery2.jpg','2023-04-02 22:36:25','2023-04-02 22:36:25');
/*!40000 ALTER TABLE `gallery_theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2012_03_09_200244_create_accounts_table',1),(2,'2014_10_12_000000_create_users_table',1),(3,'2014_10_12_100000_create_password_reset_tokens_table',1),(4,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2019_12_14_000001_create_personal_access_tokens_table',1),(6,'2023_02_28_084250_create_access_group_table',1),(7,'2023_02_28_085527_create_access_group_has_users_table',1),(8,'2023_03_04_091448_create_articles_table',1),(9,'2023_03_04_091929_create_videos_table',1),(10,'2023_03_09_200828_create_posts_table',1),(11,'2023_03_09_201239_create_comments_table',1),(12,'2023_03_19_082738_create_news_table',1),(13,'2023_03_24_064020_create_gallery_theme_table',1),(14,'2023_03_24_064359_create_gallery_table',1),(15,'2023_03_29_081156_create_favorites_table',1),(16,'2023_03_29_090938_create_events_table',1),(17,'2023_03_29_120910_remove_columns_started_at_and_ending_at_from_news_table',1),(18,'2023_03_29_143119_create_traffic_table',1),(19,'2023_03_31_010644_add_column_is_active_to_events_table',2),(20,'2023_03_31_011456_create_registration_orders_table',2),(21,'2023_04_01_175539_create_applications_for_registration',2),(22,'2023_04_03_095954_rename_events_column',2),(23,'2023_04_06_132927_create_notifications_table',2),(24,'2023_04_06_181151_update_users_table',2),(25,'2023_04_08_014630_create_categories_table',2),(26,'2023_04_08_014702_create_community_center_table',2),(27,'2023_04_08_020058_create_community_center_photos_table',2),(28,'2023_04_11_095415_create_notifications_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'\"Эксперт медицинского симуляционного обучения\". Объявляется новый набор!','Месяц назад завершился единственный в России и странах СНГ четырехмесячный курс «Эксперт медицинского симуляционного обучения», разработанный РОСОМЕД и организованный на базе учебного центра &laq...','Doloribus asperiores nobis ratione accusantium quam sapiente cum quae.','/images/news/news1.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(2,'Итоги круглого стола «Подготовка преподавателей, обучающих коммуникации в медицине»','В продолжение работы по повышению качества подготовки медицинских кадров 31 марта 2023 года состоялся  круглый стол «Подготовка преподавателей, обучающих коммуникации в медицине&raq...','Id voluptatibus doloremque adipisci aut aspernatur soluta molestiae repellat et quo est fuga aut.','/images/news/news2.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(3,'\"Эксперт медицинского симуляционного обучения\". Объявляется новый набор!','Месяц назад завершился единственный в России и странах СНГ четырехмесячный курс «Эксперт медицинского симуляционного обучения», разработанный РОСОМЕД и организованный на базе учебного центра &laq...','Doloremque odio ut similique earum aspernatur eos dolores deleniti soluta suscipit.','/images/news/news1.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(4,'Итоги круглого стола «Подготовка преподавателей, обучающих коммуникации в медицине»','В продолжение работы по повышению качества подготовки медицинских кадров 31 марта 2023 года состоялся  круглый стол «Подготовка преподавателей, обучающих коммуникации в медицине&raq...','Corporis sit doloremque rerum fugiat nesciunt qui.','/images/news/news2.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(5,'\"Эксперт медицинского симуляционного обучения\". Объявляется новый набор!','Месяц назад завершился единственный в России и странах СНГ четырехмесячный курс «Эксперт медицинского симуляционного обучения», разработанный РОСОМЕД и организованный на базе учебного центра &laq...','Dolorem quasi autem harum ipsa id tempore molestiae eaque inventore unde.','/images/news/news1.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(6,'Итоги круглого стола «Подготовка преподавателей, обучающих коммуникации в медицине»','В продолжение работы по повышению качества подготовки медицинских кадров 31 марта 2023 года состоялся  круглый стол «Подготовка преподавателей, обучающих коммуникации в медицине&raq...','Doloremque laudantium sit quasi soluta maiores rerum dolor tenetur deleniti minus eum.','/images/news/news2.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(7,'\"Эксперт медицинского симуляционного обучения\". Объявляется новый набор!','Месяц назад завершился единственный в России и странах СНГ четырехмесячный курс «Эксперт медицинского симуляционного обучения», разработанный РОСОМЕД и организованный на базе учебного центра &laq...','Est velit natus laudantium illo est quo.','/images/news/news1.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(8,'Итоги круглого стола «Подготовка преподавателей, обучающих коммуникации в медицине»','В продолжение работы по повышению качества подготовки медицинских кадров 31 марта 2023 года состоялся  круглый стол «Подготовка преподавателей, обучающих коммуникации в медицине&raq...','Perferendis non explicabo et enim laudantium nobis.','/images/news/news2.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(9,'\"Эксперт медицинского симуляционного обучения\". Объявляется новый набор!','Месяц назад завершился единственный в России и странах СНГ четырехмесячный курс «Эксперт медицинского симуляционного обучения», разработанный РОСОМЕД и организованный на базе учебного центра &laq...','Deleniti hic laudantium nemo nesciunt in voluptatum quia dolores ut est aperiam.','/images/news/news1.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24'),(10,'Итоги круглого стола «Подготовка преподавателей, обучающих коммуникации в медицине»','В продолжение работы по повышению качества подготовки медицинских кадров 31 марта 2023 года состоялся  круглый стол «Подготовка преподавателей, обучающих коммуникации в медицине&raq...','Accusamus quidem saepe possimus architecto ut in qui laborum sint iste et eaque error.','/images/news/news2.jpg','2023-04-02 22:36:24','2023-04-02 22:36:24');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES ('4f7a2da0-7b21-4b60-bbf2-976d91dc4874','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"eos\\\" post is commented\"}','2023-04-15 17:47:47','2023-04-15 17:47:38','2023-04-15 17:47:47'),('4fa7484d-1710-4845-a0d4-35d899443e4f','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"eos\\\" post is commented\"}','2023-04-13 15:24:02','2023-04-13 15:23:01','2023-04-13 15:24:02'),('514b6b13-cb25-43ba-bcef-754263c92ddb','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"sit\\\" post is commented\"}','2023-04-17 07:49:53','2023-04-17 07:48:53','2023-04-17 07:49:53'),('5a5eca46-5d8e-4338-bc9a-1d89aa3c9033','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"sit\\\" post is commented\"}','2023-04-17 07:49:53','2023-04-17 07:49:00','2023-04-17 07:49:53'),('5ebf959d-da21-4e24-be70-266be09b4866','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"sit\\\" post is commented\"}','2023-04-17 11:01:56','2023-04-17 11:01:22','2023-04-17 11:01:56'),('a76fe0af-7acf-45a1-aa77-424316ace504','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"dolores\\\" post is commented\"}','2023-04-17 11:01:56','2023-04-17 11:00:55','2023-04-17 11:01:56'),('a9f040d3-cd34-433b-9141-878ab2155077','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"sdfghj\\\" post is commented\"}','2023-04-13 16:39:29','2023-04-13 15:28:03','2023-04-13 16:39:29'),('e18fbba5-9aaa-4d06-9fb1-b964158d7b51','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"sdfghj\\\" post is commented\"}','2023-04-13 16:39:29','2023-04-13 15:28:07','2023-04-13 16:39:29'),('e26089d5-8073-442c-b5ff-7a46500f5a7f','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"et\\\" post is commented\"}','2023-04-17 18:12:15','2023-04-17 18:12:06','2023-04-17 18:12:15'),('ea69344a-9401-4fd5-9483-b537452f8a89','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"id\\\" post is commented\"}','2023-04-13 16:39:29','2023-04-13 15:27:48','2023-04-13 16:39:29'),('f7a7d2ee-c681-443e-a449-6174200a2fce','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"eos\\\" post is commented\"}','2023-04-13 15:15:18','2023-04-13 15:15:13','2023-04-13 15:15:18'),('fba255f1-fddf-4559-9c5a-320a25576e0d','App\\Notifications\\CommentsNotification','App\\Models\\User',1,'{\"data\":\" You \\\"beatae\\\" post is commented\"}','2023-05-11 10:01:31','2023-05-10 09:23:07','2023-05-11 10:01:31');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
INSERT INTO `password_reset_tokens` VALUES ('test@test.ru','$2y$10$29OHEgjHqIy8aWkxT5rOLe6HEJdbGA0mXu.N.cxH1h8kHAFplJVEa','2023-04-17 18:07:35');
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\Account',1,'accessToken','27c02ebdbfe420dc809b8fb5c14a811afe4188023b7c5770c36ef1feddafacfa','[\"*\"]',NULL,'2023-04-03 22:37:57','2023-04-02 22:37:57','2023-04-02 22:37:57'),(2,'App\\Models\\Account',1,'accessToken','4993a9e1c8c8721e3ef13b25cf305098b8d357ed44c83578d332e2508c541822','[\"*\"]',NULL,'2023-04-03 23:56:45','2023-04-02 23:56:45','2023-04-02 23:56:45'),(3,'App\\Models\\Account',1,'accessToken','8e41227eaa8e04a1a3750651864b237e1271d488d55e488dc4b7f09b5c54ee81','[\"*\"]',NULL,'2023-04-04 07:46:43','2023-04-03 07:46:43','2023-04-03 07:46:43'),(4,'App\\Models\\Account',1,'accessToken','9b518a1fe3e00dd8356c3146d5a454026ff72b1216151543da93abca542a2071','[\"*\"]',NULL,'2023-04-04 13:02:14','2023-04-03 13:02:14','2023-04-03 13:02:14'),(5,'App\\Models\\Account',1,'accessToken','f1538e132076584323baf81c23fe21fe761b60514152f081cc7004ead9927970','[\"*\"]',NULL,'2023-04-04 13:05:31','2023-04-03 13:05:31','2023-04-03 13:05:31'),(6,'App\\Models\\Account',1,'accessToken','75bb0188525d5f6b9d531fb88b84e68d0d6beb2d0f492ea8e5454529ea3245da','[\"*\"]',NULL,'2023-04-04 13:05:42','2023-04-03 13:05:42','2023-04-03 13:05:42'),(7,'App\\Models\\Account',1,'accessToken','2494f4975433eed4af39ff6984f7ebe003233f053ed14d3b3696057f6b83aa59','[\"*\"]',NULL,'2023-04-04 13:05:44','2023-04-03 13:05:44','2023-04-03 13:05:44'),(8,'App\\Models\\Account',1,'accessToken','19095ae2ad76496a263389b927ab07b4f8f2380bf1bc8b053fc208d57c135a46','[\"*\"]',NULL,'2023-04-04 13:05:46','2023-04-03 13:05:46','2023-04-03 13:05:46'),(9,'App\\Models\\Account',1,'accessToken','5da07a66ac2ee93d77d2b41c57c341a47c101198ac792cd2b0a439ec827039cb','[\"*\"]',NULL,'2023-04-04 13:05:48','2023-04-03 13:05:48','2023-04-03 13:05:48'),(10,'App\\Models\\Account',1,'accessToken','465c67fbd2fabf9346567e60a29fe3fd6ff647277c52da54def3166e4938eb6a','[\"*\"]',NULL,'2023-04-04 13:06:40','2023-04-03 13:06:40','2023-04-03 13:06:40'),(11,'App\\Models\\Account',1,'accessToken','602c55eaf42982329b9d27f32b1283c199e7415b9b0b56f64b184cf0538de047','[\"*\"]',NULL,'2023-04-04 13:11:05','2023-04-03 13:11:05','2023-04-03 13:11:05'),(12,'App\\Models\\Account',1,'accessToken','d01710f9d5d1038cb24db235bfa0ba587af9830d4aaa31a070d45f4a31bf3ab9','[\"*\"]',NULL,'2023-04-04 13:24:09','2023-04-03 13:24:09','2023-04-03 13:24:09'),(13,'App\\Models\\Account',1,'accessToken','3c58bac0c4b56a5904305cff65d71ae8dc263b24e78cf4d1825b3db12013efe5','[\"*\"]',NULL,'2023-04-04 13:40:56','2023-04-03 13:40:56','2023-04-03 13:40:56'),(14,'App\\Models\\Account',1,'accessToken','03adde1ff9f1c52619c0e02c1182e974b2f3243f6270cd93fcd04f08b2583958','[\"*\"]',NULL,'2023-04-04 13:46:07','2023-04-03 13:46:07','2023-04-03 13:46:07'),(15,'App\\Models\\Account',1,'accessToken','1d34f43ad8df5800086c2c965da57e0007f4f41c7a3cc9ed8c2e16b62a7db697','[\"*\"]',NULL,'2023-04-04 14:02:04','2023-04-03 14:02:04','2023-04-03 14:02:04'),(16,'App\\Models\\Account',1,'accessToken','c3b45f6c9283f297ab2df795c5efa28d4eea2857f94948cd8ae1ff12b2313fda','[\"*\"]',NULL,'2023-04-04 14:08:47','2023-04-03 14:08:47','2023-04-03 14:08:47'),(17,'App\\Models\\Account',1,'accessToken','2c7af4503adf6118e6eec6a44f483f59b4670d23ac662581f2f6c3a00f002c54','[\"*\"]',NULL,'2023-04-04 14:11:53','2023-04-03 14:11:53','2023-04-03 14:11:53'),(18,'App\\Models\\Account',1,'accessToken','64e13ed013e467a89d24e8929e493250a2c405e5952ae99413c8228ce948e35b','[\"*\"]',NULL,'2023-04-04 14:14:26','2023-04-03 14:14:26','2023-04-03 14:14:26'),(19,'App\\Models\\Account',1,'accessToken','7dd2f0b9c069640527579f377b0657db6b37a1c010a7913ebf56ca9507b0c1cc','[\"*\"]',NULL,'2023-04-04 14:19:09','2023-04-03 14:19:09','2023-04-03 14:19:09'),(20,'App\\Models\\Account',1,'accessToken','b9135b9954048f8313b2e0344ffa12752c3d52e7361506b2714b6e0be25cd886','[\"*\"]',NULL,'2023-04-04 14:33:57','2023-04-03 14:33:57','2023-04-03 14:33:57'),(21,'App\\Models\\Account',1,'accessToken','e428fc18f160ccee33e354e0417d6e3c949fef47db0fb912d353fdd657cf82fe','[\"*\"]',NULL,'2023-04-04 15:04:42','2023-04-03 15:04:42','2023-04-03 15:04:42'),(22,'App\\Models\\Account',1,'accessToken','ed350f606daf801f248634d7a0a0ad2480b24712d30aa6b1557ec0e24c3074d1','[\"*\"]',NULL,'2023-04-04 15:12:57','2023-04-03 15:12:57','2023-04-03 15:12:57'),(23,'App\\Models\\Account',1,'accessToken','be191b4c0e3816fc0a923ef76b39bd5616920afdf3af4def31c4c72e78ce4343','[\"*\"]',NULL,'2023-04-04 15:15:58','2023-04-03 15:15:58','2023-04-03 15:15:58'),(24,'App\\Models\\Account',1,'accessToken','c5bedde31f2f38f7440e822395a9da33d8f1e222656387532f4dd92da3a9b04c','[\"*\"]',NULL,'2023-04-04 15:17:13','2023-04-03 15:17:13','2023-04-03 15:17:13'),(25,'App\\Models\\Account',1,'accessToken','854ed482191e9546bdcb3ef2557473f3a9acbab9fe43e361bfb45dfa6c056dec','[\"*\"]',NULL,'2023-04-04 15:52:04','2023-04-03 15:52:04','2023-04-03 15:52:04'),(26,'App\\Models\\Account',1,'accessToken','693b88bba9ec9538c93759e84e3196dabb92e3c3b83b34cb4b70a0eedc1aaecc','[\"*\"]',NULL,'2023-04-04 15:57:41','2023-04-03 15:57:41','2023-04-03 15:57:41'),(27,'App\\Models\\Account',1,'accessToken','f1f16b36a31c4c77b995855df76e55c85a735401e8d0293ff35c420f9b39c0ff','[\"*\"]',NULL,'2023-04-04 15:58:07','2023-04-03 15:58:07','2023-04-03 15:58:07'),(28,'App\\Models\\Account',1,'accessToken','dadc7ac898b0275ab7d6c060e374624b61dd35efc6294c768e599c8d0bda4970','[\"*\"]',NULL,'2023-04-04 16:01:19','2023-04-03 16:01:19','2023-04-03 16:01:19'),(29,'App\\Models\\Account',1,'accessToken','6f7c84e17ac2394d22e866583e8e1188ab5aa90b83bc5bd08f4aaddca4f9d39f','[\"*\"]',NULL,'2023-04-04 16:06:31','2023-04-03 16:06:31','2023-04-03 16:06:31'),(30,'App\\Models\\Account',1,'accessToken','cebd6354a19d33e9a9d53b85c5372188ad052ced9f497d53446dd2eafc320500','[\"*\"]',NULL,'2023-04-04 16:11:58','2023-04-03 16:11:58','2023-04-03 16:11:58'),(31,'App\\Models\\Account',1,'accessToken','14df1562ebfd11b5566824fdb73760926ea49398a7f9157bd7bcef1ae95d5358','[\"*\"]',NULL,'2023-04-04 16:14:09','2023-04-03 16:14:09','2023-04-03 16:14:09'),(32,'App\\Models\\Account',1,'accessToken','99b5488d2e10327994a0da29824b3efb093a66a7c384b5b12af2ce5a86b5372b','[\"*\"]',NULL,'2023-04-04 16:16:10','2023-04-03 16:16:10','2023-04-03 16:16:10'),(33,'App\\Models\\Account',1,'accessToken','233edbc63cb349ac463d197cf7be0546c4a8ef21af6b95d38f5186f69ce43ce9','[\"*\"]',NULL,'2023-04-04 16:18:15','2023-04-03 16:18:15','2023-04-03 16:18:15'),(34,'App\\Models\\Account',1,'accessToken','be075082bc6befb9a6cf02d516465f9e951035b920cc9fa724c50cee65ca0d1a','[\"*\"]',NULL,'2023-04-04 16:19:49','2023-04-03 16:19:49','2023-04-03 16:19:49'),(35,'App\\Models\\Account',1,'accessToken','0d224908ae57a6496745481dead35cf06e82be5be689857da760a33a1bbdbda3','[\"*\"]',NULL,'2023-04-04 16:28:50','2023-04-03 16:28:50','2023-04-03 16:28:50'),(36,'App\\Models\\Account',1,'accessToken','0dd96d3663e378e8f7928ace72236d08f2abf218949ee6e1c6f52858422a761c','[\"*\"]',NULL,'2023-04-04 16:31:52','2023-04-03 16:31:52','2023-04-03 16:31:52'),(37,'App\\Models\\Account',1,'accessToken','b18886f849ee94100dbf7bd0949092bbc0f772e901371905cdfd7636f5b93771','[\"*\"]',NULL,'2023-04-04 16:32:20','2023-04-03 16:32:20','2023-04-03 16:32:20'),(38,'App\\Models\\Account',1,'accessToken','7496c78ff032aa2a1d7a577e47f2e491095596337e0701eed8e980a0e7c40d1f','[\"*\"]',NULL,'2023-04-04 16:34:42','2023-04-03 16:34:42','2023-04-03 16:34:42'),(39,'App\\Models\\Account',1,'accessToken','f96b7bc4f355790c6065e4d8a626fcd6534c3c3c22b3254b3481181b3d469f31','[\"*\"]',NULL,'2023-04-04 16:34:56','2023-04-03 16:34:56','2023-04-03 16:34:56'),(40,'App\\Models\\Account',1,'accessToken','bd5653990ae6a23ac0abe78350aa8818e19c3980c248970c932ca4d3801c2304','[\"*\"]',NULL,'2023-04-04 16:49:40','2023-04-03 16:49:40','2023-04-03 16:49:40'),(41,'App\\Models\\Account',1,'accessToken','6a5acb7a26b3b143814a02dbd6a7b8dd08477a15e295fa6875201d767e7e7ee3','[\"*\"]',NULL,'2023-04-04 16:51:25','2023-04-03 16:51:25','2023-04-03 16:51:25'),(42,'App\\Models\\Account',1,'accessToken','bb9d9128aee586be31a586bacd75d3f6eeedf16ab4179c8cdc7d33081d36b447','[\"*\"]',NULL,'2023-04-04 17:09:26','2023-04-03 17:09:26','2023-04-03 17:09:26'),(43,'App\\Models\\Account',1,'accessToken','ce3d28d63e16914cd3d7e8d29f6a51401539fabee98fda64bd519bdb6e1740f2','[\"*\"]',NULL,'2023-04-04 17:10:50','2023-04-03 17:10:50','2023-04-03 17:10:50'),(44,'App\\Models\\Account',1,'accessToken','0df41b3d0d3c4ff5c5f186c63c3b776b516359c563564474c685a8225606b932','[\"*\"]',NULL,'2023-04-04 17:22:06','2023-04-03 17:22:06','2023-04-03 17:22:06'),(45,'App\\Models\\Account',1,'accessToken','cd2f9ca05ed20fca16197dcf9fda9a77dba6d9196a16f9fa6cf03900c4eea525','[\"*\"]',NULL,'2023-04-04 17:25:01','2023-04-03 17:25:01','2023-04-03 17:25:01'),(46,'App\\Models\\Account',1,'accessToken','8a1101fae60e8149257d049ab910596be33b81aa3a8555e60d12bef36e9548a8','[\"*\"]',NULL,'2023-04-04 17:26:17','2023-04-03 17:26:17','2023-04-03 17:26:17'),(47,'App\\Models\\Account',1,'accessToken','010af0afe1e2fe07940608a59fb2ced9ecfd3d14151a2997c33f3f3fd7afebe3','[\"*\"]',NULL,'2023-04-04 17:29:32','2023-04-03 17:29:32','2023-04-03 17:29:32'),(48,'App\\Models\\Account',1,'accessToken','67a4f4e5344bf239b492813fc5a457127ec8c6ef4c877feae11ead42f198387d','[\"*\"]',NULL,'2023-04-04 17:32:33','2023-04-03 17:32:33','2023-04-03 17:32:33'),(49,'App\\Models\\Account',1,'accessToken','d22ad40a3339f95aec4e95dbda954da1ba586a0299ce32694009f530950bde09','[\"*\"]',NULL,'2023-04-05 18:36:55','2023-04-04 18:36:55','2023-04-04 18:36:55'),(50,'App\\Models\\Account',1,'accessToken','9efbb87c7e60d4ae4b7b3977d16822078d67230589b82508b25f119597301abc','[\"*\"]',NULL,'2023-04-05 18:39:34','2023-04-04 18:39:34','2023-04-04 18:39:34'),(51,'App\\Models\\Account',1,'accessToken','1309e47f31883d30375ac7bbfcf35204fa1f498190760ca31f1978a60860127e','[\"*\"]',NULL,'2023-04-05 18:44:08','2023-04-04 18:44:08','2023-04-04 18:44:08'),(52,'App\\Models\\Account',1,'accessToken','14da34bebd3f5b1994d5dc49f1d3b564f0afa60f72a95c155f15a8a809532961','[\"*\"]',NULL,'2023-04-05 18:46:20','2023-04-04 18:46:20','2023-04-04 18:46:20'),(53,'App\\Models\\Account',1,'accessToken','e043930a202207ac203b5c755c22e70d6f01060b1bc51bfc03f9598428d3418b','[\"*\"]',NULL,'2023-04-05 18:46:39','2023-04-04 18:46:39','2023-04-04 18:46:39'),(54,'App\\Models\\Account',1,'accessToken','1b3432447bac4fe56d0963f2cc1df27d374d2bb06575f3ef4e397be6a1a51649','[\"*\"]',NULL,'2023-04-05 18:51:22','2023-04-04 18:51:22','2023-04-04 18:51:22'),(55,'App\\Models\\Account',1,'accessToken','c397717afcf492d35ce5cb3b438a7d99504a1efb9aaf477e8a723a6c9089beac','[\"*\"]',NULL,'2023-04-05 18:53:03','2023-04-04 18:53:03','2023-04-04 18:53:03'),(56,'App\\Models\\Account',1,'accessToken','67d39121f8b244696c1af560b226519903c2fa33e6cdf29fdd7a4c21dd0aa9fb','[\"*\"]',NULL,'2023-04-05 19:03:47','2023-04-04 19:03:47','2023-04-04 19:03:47'),(57,'App\\Models\\Account',1,'accessToken','bd343632bd1ecc9d70a873c4884491ca5ec6659c3aa789722702ab1a17d5d7d1','[\"*\"]',NULL,'2023-04-05 20:04:46','2023-04-04 20:04:46','2023-04-04 20:04:46'),(58,'App\\Models\\Account',1,'accessToken','8f78c3b92507d4f63fefc520bc6ebc6dbb106720a81cc15fb55a34e852153d43','[\"*\"]',NULL,'2023-04-06 06:24:51','2023-04-05 06:24:51','2023-04-05 06:24:51'),(59,'App\\Models\\Account',1,'accessToken','7fb538326a8cf8a0d346e9066395c8caa9f48d7cbfb37140782d36a0cfd1b08c','[\"*\"]',NULL,'2023-04-10 20:16:47','2023-04-09 20:16:47','2023-04-09 20:16:47'),(60,'App\\Models\\Account',1,'accessToken','bf4a93e3948211672a93c9f9b0a29cb26782b6ee94e1a1bb3f79a0ef96144d93','[\"*\"]',NULL,'2023-04-10 20:25:45','2023-04-09 20:25:45','2023-04-09 20:25:45'),(61,'App\\Models\\Account',1,'accessToken','14969dd66134efcc9814bfaa23691a67f841beca0df5fbe03071ddddfb27e481','[\"*\"]',NULL,'2023-04-10 21:19:54','2023-04-09 21:19:54','2023-04-09 21:19:54'),(62,'App\\Models\\Account',1,'accessToken','da9918c629e697de8e39c1db35d92739ad3d5ec788bef85a056072a16f520259','[\"*\"]',NULL,'2023-04-11 15:29:11','2023-04-10 15:29:11','2023-04-10 15:29:11'),(63,'App\\Models\\Account',1,'accessToken','52fd809b9aba1ea83059ab911ca47a718ad96e34e6fe5abf0686c0dfa99ec108','[\"*\"]',NULL,'2023-04-11 16:52:33','2023-04-10 16:52:33','2023-04-10 16:52:33'),(64,'App\\Models\\Account',1,'accessToken','c75df8cbbbd3633b5b6ce1f66d8b629fab4e679cb692b532999b36e8ca772004','[\"*\"]',NULL,'2023-04-12 19:24:51','2023-04-11 19:24:51','2023-04-11 19:24:51'),(65,'App\\Models\\Account',1,'accessToken','9ef4a7e9d14a7297ed8df1d0d79f097213a58b334ce4774a68449920afead877','[\"*\"]',NULL,'2023-04-12 20:24:32','2023-04-11 20:24:32','2023-04-11 20:24:32'),(66,'App\\Models\\Account',1,'accessToken','3f3a123c48726fbde11ba4f7b4ebd98acb5262723de2f85326a00b71f145cb0b','[\"*\"]',NULL,'2023-04-12 20:35:38','2023-04-11 20:35:38','2023-04-11 20:35:38'),(67,'App\\Models\\Account',1,'accessToken','7232a83b6d96702228a3dea533e46d9eae0b61e5867aef8b7879651c421a36f1','[\"*\"]',NULL,'2023-04-13 09:11:22','2023-04-12 09:11:22','2023-04-12 09:11:22'),(68,'App\\Models\\Account',1,'accessToken','621c6ed5681c638f4112ac57da5f41265493757cb415953f4040380f1bce39ad','[\"*\"]',NULL,'2023-04-13 10:30:49','2023-04-12 10:30:49','2023-04-12 10:30:49'),(69,'App\\Models\\Account',1,'accessToken','659f333ff01e216eb8e51cd1835b56a2a2caf238834917eca8b518f252e1ac9a','[\"*\"]',NULL,'2023-04-13 11:59:16','2023-04-12 11:59:16','2023-04-12 11:59:16'),(70,'App\\Models\\Account',1,'accessToken','fd3db4833471f395ad2798066507257ae75a32ec9db9dab6be7df24814f8acdb','[\"*\"]',NULL,'2023-04-14 15:06:42','2023-04-13 15:06:42','2023-04-13 15:06:42'),(71,'App\\Models\\Account',1,'accessToken','b90d31eadd6afd4103137ccbf31c9f011f1e4be8d55af81441ff4e54587043e9','[\"*\"]',NULL,'2023-04-14 15:14:40','2023-04-13 15:14:40','2023-04-13 15:14:40'),(72,'App\\Models\\Account',1,'accessToken','2d8d73ab6a130a57fe983b1fab90b54d76d18334926e4fcee75cf1d4d4018981','[\"*\"]',NULL,'2023-04-14 15:14:59','2023-04-13 15:14:59','2023-04-13 15:14:59'),(73,'App\\Models\\Account',1,'accessToken','2a7777174070b6125a9cb0b9fdee0a43d59273b97077aa8c8ba9192466a780f5','[\"*\"]',NULL,'2023-04-14 15:24:33','2023-04-13 15:24:33','2023-04-13 15:24:33'),(74,'App\\Models\\Account',1,'accessToken','d1660ec91a507a26378e8c88bec360c7c6673203f8405dd15615e80ff5f939fc','[\"*\"]',NULL,'2023-04-14 15:24:42','2023-04-13 15:24:42','2023-04-13 15:24:42'),(75,'App\\Models\\Account',1,'accessToken','9488f1efc822e273cf450c427d104fca4d17f253cc5e5cb2a09482ad0cd48931','[\"*\"]',NULL,'2023-04-14 15:24:55','2023-04-13 15:24:55','2023-04-13 15:24:55'),(76,'App\\Models\\Account',1,'accessToken','df6ad54ea8e6059bd33546e4f41356cb8b843c4b24c71d404aa2d106dddc9071','[\"*\"]',NULL,'2023-04-14 17:48:14','2023-04-13 17:48:14','2023-04-13 17:48:14'),(77,'App\\Models\\Account',1,'accessToken','0396dcee24ec14e13ad014e55e3391517d702aa15bf0de382eb15bc620af3719','[\"*\"]',NULL,'2023-04-15 14:06:06','2023-04-14 14:06:06','2023-04-14 14:06:06'),(78,'App\\Models\\Account',1,'accessToken','0875e68bcb8e64320c36861702496019aa71e9fb197ba57a32033a9326083844','[\"*\"]',NULL,'2023-04-16 10:25:38','2023-04-15 10:25:38','2023-04-15 10:25:38'),(79,'App\\Models\\Account',1,'accessToken','e2e9c2f249431f28dd79b80ee8e2ec4f7fbb13475c319322b9735ab2348b642b','[\"*\"]',NULL,'2023-04-16 17:45:56','2023-04-15 17:45:56','2023-04-15 17:45:56'),(80,'App\\Models\\Account',1,'accessToken','49abc34be1d4478d51e26a41b04015e2a39b805d3c973acc7d3217288245ee21','[\"*\"]',NULL,'2023-04-16 17:47:18','2023-04-15 17:47:18','2023-04-15 17:47:18'),(81,'App\\Models\\Account',1,'accessToken','b08518a73d2155b45bcafc3aa3ea48a235aa6d3e68f4c69a206471c5550d9065','[\"*\"]',NULL,'2023-04-17 08:15:32','2023-04-16 08:15:32','2023-04-16 08:15:32'),(82,'App\\Models\\Account',1,'accessToken','ddcae98eed6b043a784a32f0721e5ba2f10f9685b87bb3606569175549bddc27','[\"*\"]',NULL,'2023-04-17 09:26:33','2023-04-16 09:26:33','2023-04-16 09:26:33'),(83,'App\\Models\\Account',1,'accessToken','1fe7f4d34fff9adbdf04f991bc69e5e9238f55778cd98d3bf69d6e6cd1f54fc5','[\"*\"]',NULL,'2023-04-17 12:35:08','2023-04-16 12:35:08','2023-04-16 12:35:08'),(84,'App\\Models\\Account',1,'accessToken','3944e0a50fac38010d56b7a096e2f612f212ffb18f04505893970586ef56fbad','[\"*\"]',NULL,'2023-04-17 19:19:44','2023-04-16 19:19:44','2023-04-16 19:19:44'),(85,'App\\Models\\Account',1,'accessToken','8ccc8665fa70922b79354c661c3b396709cf4fea915895136842ade610db4c29','[\"*\"]',NULL,'2023-04-17 19:30:29','2023-04-16 19:30:29','2023-04-16 19:30:29'),(86,'App\\Models\\Account',1,'accessToken','e93207d3b8402ac6a3e151c8d04896394d03ca2f6807e1e198352cf9c3c139d5','[\"*\"]',NULL,'2023-04-17 19:35:47','2023-04-16 19:35:47','2023-04-16 19:35:47'),(87,'App\\Models\\Account',1,'accessToken','39857ed018e106c96cc0b7e97bf8c7a812fee2d913da034a298d1fb620682644','[\"*\"]',NULL,'2023-04-17 20:19:44','2023-04-16 20:19:44','2023-04-16 20:19:44'),(88,'App\\Models\\Account',1,'accessToken','6b0a9283eed4b07a3cd583e529d5a7ed0d499922d11f8be59c52e3a616e4f7f1','[\"*\"]',NULL,'2023-04-17 20:19:55','2023-04-16 20:19:55','2023-04-16 20:19:55'),(89,'App\\Models\\Account',1,'accessToken','48ce3d9129176f10536e5dfccb8f76502fb73601c4b0b587176bd019d976bde2','[\"*\"]',NULL,'2023-04-17 22:03:04','2023-04-16 22:03:04','2023-04-16 22:03:04'),(90,'App\\Models\\Account',1,'accessToken','54d62ac1930d2a9d19116e20140f5d2baf1f104b3ae066600216dbd8264cef38','[\"*\"]',NULL,'2023-04-17 22:38:20','2023-04-16 22:38:20','2023-04-16 22:38:20'),(91,'App\\Models\\Account',1,'accessToken','a7a84f01447cc17346c000b5a4bf3df5948c5cf462296460bcffcbe1418c42ef','[\"*\"]',NULL,'2023-04-18 07:44:22','2023-04-17 07:44:22','2023-04-17 07:44:22'),(92,'App\\Models\\Account',1,'accessToken','7aa0d435133477e9fb9132664cf0b3f80e2cb2f9f17ca6ca315d8c3ef5e3d919','[\"*\"]',NULL,'2023-04-18 09:09:14','2023-04-17 09:09:14','2023-04-17 09:09:14'),(93,'App\\Models\\Account',1,'accessToken','0822b2b5ea92bb89f7f5668e7aa82bae69413883c6a5063db69f54fa6b299b2a','[\"*\"]',NULL,'2023-04-18 10:48:56','2023-04-17 10:48:56','2023-04-17 10:48:56'),(94,'App\\Models\\Account',1,'accessToken','fd136354a0520de05fa902e8e6c2d85106c7536f8f139d956f723b6235a2a16b','[\"*\"]',NULL,'2023-04-18 11:01:15','2023-04-17 11:01:15','2023-04-17 11:01:15'),(95,'App\\Models\\Account',1,'accessToken','03789302eab40257f386eb87397562943b4f8927ae61d94e00b31f0edd8aaced','[\"*\"]',NULL,'2023-04-18 11:42:44','2023-04-17 11:42:44','2023-04-17 11:42:44'),(96,'App\\Models\\Account',1,'accessToken','86ff0e9670f6db0cacaf02247950821514540d5f17d32dbb9c106a2c8767d3a6','[\"*\"]',NULL,'2023-04-18 17:13:55','2023-04-17 17:13:55','2023-04-17 17:13:55'),(97,'App\\Models\\Account',1,'accessToken','4e8a426ad374cf5a704a75e48ab70f0c72dee0425d41e75e3f5e8d445605664d','[\"*\"]',NULL,'2023-04-18 18:06:22','2023-04-17 18:06:22','2023-04-17 18:06:22'),(98,'App\\Models\\Account',1,'accessToken','7f4e4a9e0294b266a00759d101a5826be6caa09aa5312baadb7087a9e185bd72','[\"*\"]',NULL,'2023-04-18 18:07:14','2023-04-17 18:07:14','2023-04-17 18:07:14'),(99,'App\\Models\\Account',1,'accessToken','9a3e3ae8b8ebe9f42d74d6b25dd16403447b254b5ab7f59b3829bb2fc8d0eb81','[\"*\"]',NULL,'2023-04-18 18:08:04','2023-04-17 18:08:04','2023-04-17 18:08:04'),(100,'App\\Models\\Account',1,'accessToken','32a7d35ba2a0c8034e9f77a27790737cf38adfb6abfa93ee3c0a65757c5f4bbc','[\"*\"]',NULL,'2023-04-19 07:46:49','2023-04-18 07:46:49','2023-04-18 07:46:49'),(101,'App\\Models\\Account',1,'accessToken','8a8fab6b91e9232fd483db8d376c0d660d67546c8a88911197f8fa891fd9687f','[\"*\"]',NULL,'2023-04-19 20:10:57','2023-04-18 20:10:57','2023-04-18 20:10:57'),(102,'App\\Models\\Account',1,'accessToken','dde4a1d82a2b8f4d59cd4ffa6b2a89cdfa1c91f8ad7c9018ada5a00914717533','[\"*\"]',NULL,'2023-04-20 16:34:49','2023-04-19 16:34:49','2023-04-19 16:34:49'),(103,'App\\Models\\Account',1,'accessToken','1dedd084a8fa4e7feb7fd27b31392924d30e6aea65373167447463dd99299e1b','[\"*\"]',NULL,'2023-04-21 07:49:45','2023-04-20 07:49:45','2023-04-20 07:49:45'),(104,'App\\Models\\Account',1,'accessToken','698119917c18149e3ed0485aa2f4e58594cb228169566ad61b207af9df919ff9','[\"*\"]',NULL,'2023-04-21 07:54:27','2023-04-20 07:54:27','2023-04-20 07:54:27'),(105,'App\\Models\\Account',1,'accessToken','526988617343337af6a0ad7604dc71f42ec10eb5b1d4209546d6e5e2ce4c8a96','[\"*\"]',NULL,'2023-04-21 07:54:31','2023-04-20 07:54:31','2023-04-20 07:54:31'),(106,'App\\Models\\Account',1,'accessToken','dd2c01c30adf257923ef35478464a6962865599777f3fb8c856cc11d7025a262','[\"*\"]',NULL,'2023-04-25 19:11:26','2023-04-24 19:11:26','2023-04-24 19:11:26'),(107,'App\\Models\\Account',1,'accessToken','55baeb65023b1a97cd61e7f8a256473df51859a6644d561a072674b51100370f','[\"*\"]',NULL,'2023-05-11 09:22:56','2023-05-10 09:22:56','2023-05-10 09:22:56'),(108,'App\\Models\\Account',1,'accessToken','e9d7565f32ef01b4c6f69cf744c7394e88e9c7f90c261872285b8fdef6ddeae7','[\"*\"]',NULL,'2023-05-12 09:21:19','2023-05-11 09:21:19','2023-05-11 09:21:19'),(109,'App\\Models\\Account',1,'accessToken','b5fa127712857136022fc4aabe4a381777f62c428dee1087d21c035133a000dd','[\"*\"]',NULL,'2023-05-12 09:49:42','2023-05-11 09:49:42','2023-05-11 09:49:42'),(110,'App\\Models\\Account',1,'accessToken','5b22ba98af9387e0d1b5c01a56fb7b28b0643c39697366e153429f0f4af9b606','[\"*\"]',NULL,'2023-05-12 10:01:20','2023-05-11 10:01:20','2023-05-11 10:01:20');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `author_id` bigint unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_author_id_foreign` (`author_id`),
  CONSTRAINT `posts_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (3,1,'beatae','Qui et iste sit voluptas id eius provident excepturi officiis ratione.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(4,1,'et','Dolore quibusdam sint enim asperiores necessitatibus quidem magni nobis omnis harum iure maxime.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(5,1,'id','Ut eaque non qui quia nisi voluptate.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(6,1,'dolores','Amet id deleniti quia voluptatem quia at quasi.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(7,1,'quasiasdf','Laboriosam ipsum magni ut voluptates quisquam distinctio laudantium.sdfasdf','2023-04-02 22:36:23','2023-04-12 10:31:23'),(8,1,'velit','Culpa earum blanditiis sunt modi eaque omnis ut cum quo tenetur doloribus.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(9,1,'corrupti','Totam est corporis illum cumque dignissimos corporis ea.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(10,1,'libero','Provident illum alias voluptatum provident quis rem.','2023-04-02 22:36:23','2023-04-02 22:36:23'),(11,1,'cxb','xcvb','2023-04-11 19:31:17','2023-04-11 19:31:17'),(12,1,'xcvb','xvcb','2023-04-11 19:31:24','2023-04-11 19:31:24'),(13,1,'xcvbxcvb','xcvbxcvb','2023-04-11 19:31:29','2023-04-11 19:31:29'),(14,1,'sdfghj','dfghjk','2023-04-11 20:45:11','2023-04-11 20:45:11'),(15,1,'zcvbczvb','zcxbzcb','2023-04-12 10:31:29','2023-04-12 10:31:29'),(16,1,'ghjk','gjk','2023-04-13 15:22:52','2023-04-13 15:22:52'),(17,1,'Новый пост','<p>пкпериерер</p>','2023-04-16 13:32:19','2023-04-16 13:32:19'),(18,1,'asdf','asdf','2023-04-17 07:44:31','2023-04-17 07:44:31'),(19,1,'asdf','asdf','2023-04-17 07:44:35','2023-04-17 07:44:35'),(20,1,'rtyu','rtyu','2023-04-17 07:49:39','2023-04-17 07:49:39');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration_orders`
--

DROP TABLE IF EXISTS `registration_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `event_id` bigint unsigned NOT NULL,
  `account_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `registration_orders_event_id_foreign` (`event_id`),
  KEY `registration_orders_account_id_foreign` (`account_id`),
  CONSTRAINT `registration_orders_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `registration_orders_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `conferences` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_orders`
--

LOCK TABLES `registration_orders` WRITE;
/*!40000 ALTER TABLE `registration_orders` DISABLE KEYS */;
INSERT INTO `registration_orders` VALUES (1,60,1,'2023-04-17 08:03:44','2023-04-17 08:03:44');
/*!40000 ALTER TABLE `registration_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `traffic`
--

DROP TABLE IF EXISTS `traffic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traffic` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `count` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `traffic_user_id_foreign` (`user_id`),
  CONSTRAINT `traffic_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traffic`
--

LOCK TABLES `traffic` WRITE;
/*!40000 ALTER TABLE `traffic` DISABLE KEYS */;
INSERT INTO `traffic` VALUES (1,1,'http://localhost:7000/api/content/news/8',10,'2023-04-02 22:40:30','2023-04-18 20:20:21'),(2,1,'http://localhost:7000/api/content/videos/1',19,'2023-04-02 22:40:47','2023-04-18 20:46:55'),(3,1,'http://localhost:7000/api/content/videos/3',5,'2023-04-03 00:18:26','2023-04-03 15:51:36'),(4,1,'http://localhost:7000/api/content/videos/2',8,'2023-04-03 13:07:50','2023-04-13 15:23:15'),(5,1,'http://localhost:7000/api/content/articles/2',8,'2023-04-03 13:48:35','2023-04-20 07:50:00'),(6,1,'http://localhost:7000/api/content/news/9',5,'2023-04-03 15:21:57','2023-04-19 16:37:28'),(7,1,'http://localhost:7000/api/content/videos/6',1,'2023-04-03 15:45:17','2023-04-03 15:45:17'),(8,1,'http://localhost:7000/api/content/articles/1',3,'2023-04-03 16:51:49','2023-04-20 07:58:56'),(9,1,'http://localhost:7000/api/content/news/5',5,'2023-04-16 19:54:55','2023-04-17 18:09:06'),(10,1,'http://localhost:7000/api/content/news/4',2,'2023-04-16 22:36:33','2023-04-17 18:09:03'),(11,1,'http://localhost:7000/api/content/news/2',4,'2023-04-16 22:36:37','2023-04-18 20:21:08'),(12,1,'http://localhost:7000/api/content/news/6',1,'2023-04-17 08:22:48','2023-04-17 08:22:48'),(13,1,'http://localhost:7000/api/content/news/10',1,'2023-04-17 17:47:34','2023-04-17 17:47:34'),(14,1,'http://localhost:7000/api/content/news/1',1,'2023-04-18 20:20:34','2023-04-18 20:20:34'),(15,1,'http://localhost:7005/api/content/videos/1',1,'2023-05-11 09:38:28','2023-05-11 09:38:28'),(16,1,'http://localhost:7005/api/content/news/8',1,'2023-05-11 09:56:03','2023-05-11 09:56:03');
/*!40000 ALTER TABLE `traffic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `account_id` bigint unsigned NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_date` date NOT NULL,
  `avatar` blob,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sign_for_news` tinyint(1) NOT NULL DEFAULT '0',
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `education_end` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialization` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `degree` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `academic_rank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interests` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_member` tinyint(1) NOT NULL,
  `other_organization` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_account_id_foreign` (`account_id`),
  CONSTRAINT `users_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Andersons','Alania','Bella','2016-06-08',NULL,'1-985-527-47934','moskow','education2',1,'Animal Control Worker1','24',NULL,NULL,'2023-04-03 15:17:13','2023-03-26','asdasd','asdasd','asdasd','asdasd','Организация и менеджмент симуляционного центра, Кардиология, Стандартизированный пациент, Неотложная помощь, Терапия, Коммуникативные навыки',0,NULL),(2,2,'bbbbbbbb','bbbbbbbbb','ZXc','2023-03-26',NULL,'8 (909) 900-36-90','111111 Анадырский проезд 15/1 - 121','ZXcZXc',1,'ZXcZXc','12',NULL,NULL,NULL,'2222','sdfg','axcZXc','ZXCZXc','ZXcZXc','Кардиология',0,NULL),(3,3,'Test','Test','Test','2023-03-26',NULL,'+3759003690','111111, test avenue','test',1,'test','22',NULL,NULL,NULL,'2222','test','test','test','test','Кардиология, Коммуникативные навыки',0,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `video_youtube_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text_html` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'7NvIHqoMDJE','Merritt','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video1.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(2,'7NvIHqoMDJE','Arnulfo','magni','Quisquam dolorem voluptas repellendus voluptas inventore quia cumque rerum.','/images/videos/video2.jpg','Ratione earum quis ipsum officiis id quisquam.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(3,'7NvIHqoMDJE','Garnet','explicabo','Ab amet impedit corporis delectus tempore maiores id quidem enim laudantium aut recusandae.','/images/videos/video1.jpg','Molestiae eius ipsam nihil maxime accusantium voluptas velit distinctio labore earum eaque earum.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(4,'7NvIHqoMDJE','Hertha','minima','Magnam eum quibusdam omnis pariatur dolor autem ratione.','/images/videos/video2.jpg','Ipsum necessitatibus repellat laudantium tempora doloribus quae vitae sit occaecati suscipit aut dolores voluptas.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(5,'7NvIHqoMDJE','Orval','totam','Ex est et omnis deserunt expedita sed suscipit ut.','/images/videos/video1.jpg','Consectetur dignissimos dolores qui libero ut molestias animi odio.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(6,'7NvIHqoMDJE','Elfrieda','sint','Praesentium expedita enim facilis reprehenderit vel quas voluptates eum voluptatibus labore.','/images/videos/video2.jpg','Sunt reiciendis voluptas adipisci qui dolores dicta est.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(7,'7NvIHqoMDJE','Gerard','aut','Nostrum nulla error soluta expedita inventore in modi alias quae a dignissimos laborum dolores.','/images/videos/video1.jpg','Quia fugit inventore sunt minus harum facilis est quis corporis unde eius assumenda.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(8,'7NvIHqoMDJE','Everett','dolore','Quis eum corrupti voluptatem occaecati quo quod.','/images/videos/video2.jpg','Et voluptatem tempore quidem quia nostrum voluptate sunt odio explicabo.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(9,'7NvIHqoMDJE','Abdul','quia','Exercitationem soluta nesciunt laboriosam ratione fugit tempora est sunt.','/images/videos/video1.jpg','Odio aut enim possimus in impedit in aut saepe et nisi.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(10,'7NvIHqoMDJE','Grady','facere','Occaecati praesentium temporibus mollitia ratione ut deleniti nesciunt aut aperiam similique ipsa eveniet velit.','/images/videos/video2.jpg','Id nihil qui nihil est modi eaque fugiat est qui rerum consequatur.','2023-04-02 22:36:22','2023-04-02 22:36:22'),(11,'7NvIHqoMDJE','Merrittrtyertyeryt','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video1.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-16 19:29:18','2023-04-16 19:29:18'),(12,'7NvIHqoMDJE','Merritt','vel','Aliquid remsdfgsdfgsdgf dolorem eaque quos quisquam sint quae culpa.','/images/videos/video2.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-16 19:29:46','2023-04-16 19:29:46'),(13,'7NvIHqoMDJE','Merrittsdfgsdfgsdgsdfg','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video1.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-16 19:50:30','2023-04-16 19:50:30'),(14,'7NvIHqoMDJE','Merrittsdfgsdfgsdfg','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.sdfgsdgsdfg','/images/videos/video2.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-16 19:50:42','2023-04-16 19:50:42'),(15,'7NvIHqoMDJE','Merritt','vel','sdfgsdfgsdfgAliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video1.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.','2023-04-16 19:50:56','2023-04-16 19:50:56'),(16,'7NvIHqoMDJE','Merritt','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video2.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.sdfgsdgsdgsdgf','2023-04-16 19:51:47','2023-04-16 19:51:47'),(17,'7NvIHqoMDJE','Merritt','vel','Aliquid rem dolorem eaque quos quisquam sint quae culpa.','/images/videos/video1.jpg','Accusantium quas esse debitis et autem et tempore magnam eveniet molestiae omnis blanditiis repudiandae.авпвапвапвпвп','2023-04-16 19:52:06','2023-04-16 19:52:06'),(18,'7NvIHqoMDJE','Arnulfo','magni','Quisquam dolorem voluptas repellendus voluptas inventore quia cumque rerum.','/images/videos/video2.jpg','Ratione earum quis ipsum officiis id quisquam.аааааааа','2023-04-16 19:52:19','2023-04-16 19:52:19'),(19,'7NvIHqoMDJE','Garnet','explicabo','Ab amet impedit corporis delectus tempore maiores id quidem enim laudantium aut recusandae.','/images/videos/video1.jpg','Molestiae eius ipsam nihil maxime accusantium voluptas velit distinctio labore earum eaque earum.пппппп','2023-04-16 19:52:29','2023-04-16 19:52:29'),(20,'7NvIHqoMDJE','Garnet','explicabo','Ab amet impedit corporis delectus tempore maiores id quidem enim laudantium aut recusandae.','/images/videos/video2.jpg','111','2023-04-16 19:52:38','2023-04-16 19:52:38');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16 14:24:26
