-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 22, 2024 at 11:05 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poma_v3`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mvc_konkurs_batalia`
--

CREATE TABLE `mvc_konkurs_batalia` (
  `id` int(11) NOT NULL,
  `kategoria` varchar(255) DEFAULT NULL,
  `poziom` int(11) DEFAULT NULL,
  `ilosc_druzyn` int(11) DEFAULT NULL,
  `nr_druzyny` int(11) DEFAULT NULL,
  `img_odpowiedzi` varchar(255) DEFAULT NULL,
  `img_pytania` varchar(255) DEFAULT NULL,
  `media` varchar(255) DEFAULT NULL,
  `media_typ` enum('','audio','wideo') DEFAULT NULL,
  `stan` enum('clear','pytanie','odpowiedz','done') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `mvc_konkurs_batalia`
--

INSERT INTO `mvc_konkurs_batalia` (`id`, `kategoria`, `poziom`, `ilosc_druzyn`, `nr_druzyny`, `img_odpowiedzi`, `img_pytania`, `media`, `media_typ`, `stan`) VALUES
(1, 'informatyka', 1, 4, 1, 'baza/informatyka/1/io35.jpg', 'baza/informatyka/1/i35.jpg', '', '', 'pytanie');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mvc_konkurs_druzyny`
--

CREATE TABLE `mvc_konkurs_druzyny` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `punkty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `mvc_konkurs_pytania`
--

CREATE TABLE `mvc_konkurs_pytania` (
  `id` int(11) NOT NULL,
  `kategoria` varchar(255) NOT NULL,
  `poziom` int(11) NOT NULL,
  `img_pytania` varchar(255) NOT NULL,
  `img_odpowiedzi` varchar(255) NOT NULL,
  `rok_uzycia` int(4) NOT NULL DEFAULT 0,
  `media` varchar(255) NOT NULL,
  `media_typ` enum('','audio','wideo') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `mvc_konkurs_pytania`
--

INSERT INTO `mvc_konkurs_pytania` (`id`, `kategoria`, `poziom`, `img_pytania`, `img_odpowiedzi`, `rok_uzycia`, `media`, `media_typ`) VALUES
(1, 'bonus', 3, 'baza/bonus/1/b10.jpg', 'baza/bonus/1/bo10.jpg', 0, '', ''),
(2, 'bonus', 3, 'baza/bonus/1/b15.jpg', 'baza/bonus/1/bo15.jpg', 0, 'baza/audio/b15.mp3', 'audio'),
(3, 'bonus', 3, 'baza/bonus/1/b17.jpg', 'baza/bonus/1/bo17.jpg', 0, 'baza/wideo/b17.mp4', 'wideo'),
(4, 'bonus', 3, 'baza/bonus/1/b23.jpg', 'baza/bonus/1/bo23.jpg', 0, '', ''),
(5, 'chemia', 1, 'baza/chemia/1/c21.png', 'baza/chemia/1/co21.png', 0, '', ''),
(6, 'chemia', 1, 'baza/chemia/1/c30.png', 'baza/chemia/1/co30.png', 0, '', ''),
(7, 'chemia', 1, 'baza/chemia/1/c6.png', 'baza/chemia/1/co6.png', 0, '', ''),
(8, 'chemia', 2, 'baza/chemia/2/c17.jpg', 'baza/chemia/2/co17.jpg', 0, '', ''),
(9, 'chemia', 2, 'baza/chemia/2/c69.jpg', 'baza/chemia/2/co69.jpg', 0, '', ''),
(10, 'fizyka', 1, 'baza/fizyka/1/f2.png', 'baza/fizyka/1/fo2.png', 0, '', ''),
(11, 'fizyka', 1, 'baza/fizyka/1/f25.png', 'baza/fizyka/1/fo25.png', 0, '', ''),
(12, 'fizyka', 1, 'baza/fizyka/1/f4.png', 'baza/fizyka/1/fo4.png', 0, '', ''),
(13, 'fizyka', 2, 'baza/fizyka/2/f2.jpg', 'baza/fizyka/2/fo2.jpg', 0, '', ''),
(14, 'fizyka', 2, 'baza/fizyka/2/f20.jpg', 'baza/fizyka/2/fo20.jpg', 0, '', ''),
(15, 'fizyka', 2, 'baza/fizyka/2/f24.jpg', 'baza/fizyka/2/fo24.jpg', 0, '', ''),
(16, 'informatyka', 1, 'baza/informatyka/1/i12.jpg', 'baza/informatyka/1/io12.jpg', 0, '', ''),
(17, 'informatyka', 1, 'baza/informatyka/1/i28.jpg', 'baza/informatyka/1/io28.jpg', 0, '', ''),
(18, 'informatyka', 1, 'baza/informatyka/1/i35.jpg', 'baza/informatyka/1/io35.jpg', 0, '', ''),
(19, 'informatyka', 2, 'baza/informatyka/2/id2.jpg', 'baza/informatyka/2/ido2.jpg', 0, '', ''),
(20, 'informatyka', 2, 'baza/informatyka/2/id29.jpg', 'baza/informatyka/2/ido29.jpg', 0, '', ''),
(21, 'informatyka', 2, 'baza/informatyka/2/id8.jpg', 'baza/informatyka/2/ido8.jpg', 0, '', ''),
(22, 'matematyka', 1, 'baza/matematyka/1/m12.jpg', 'baza/matematyka/1/mo12.jpg', 0, '', ''),
(23, 'matematyka', 1, 'baza/matematyka/1/m19.jpg', 'baza/matematyka/1/mo19.jpg', 0, '', ''),
(24, 'matematyka', 1, 'baza/matematyka/1/m30.jpg', 'baza/matematyka/1/mo30.jpg', 0, '', ''),
(25, 'matematyka', 2, 'baza/matematyka/2/m11.jpg', 'baza/matematyka/2/mo11.jpg', 0, '', ''),
(26, 'matematyka', 2, 'baza/matematyka/2/m16.jpg', 'baza/matematyka/2/mo16.jpg', 0, '', ''),
(27, 'matematyka', 2, 'baza/matematyka/2/m22.jpg', 'baza/matematyka/2/mo22.jpg', 0, '', ''),
(28, 'niespodzianka', 1, 'baza/niespodzianka/1/n13.png', 'baza/niespodzianka/1/no13.png', 0, '', ''),
(29, 'niespodzianka', 1, 'baza/niespodzianka/1/n25.png', 'baza/niespodzianka/1/no25.png', 0, '', ''),
(30, 'niespodzianka', 1, 'baza/niespodzianka/1/n36.png', 'baza/niespodzianka/1/no36.png', 0, '', ''),
(31, 'niespodzianka', 2, 'baza/niespodzianka/2/n2.jpg', 'baza/niespodzianka/2/no2.jpg', 0, '', ''),
(32, 'niespodzianka', 2, 'baza/niespodzianka/2/n3.jpg', 'baza/niespodzianka/2/no3.jpg', 0, '', ''),
(33, 'niespodzianka', 2, 'baza/niespodzianka/2/n12.jpg', 'baza/niespodzianka/2/no12.jpg', 0, '', ''),
(34, 'technika', 1, 'baza/technika/1/t12.jpg', 'baza/technika/1/to12.jpg', 0, '', ''),
(35, 'technika', 1, 'baza/technika/1/t4.jpg', 'baza/technika/1/to4.jpg', 0, '', ''),
(36, 'technika', 1, 'baza/technika/1/t5.jpg', 'baza/technika/1/to5.jpg', 0, '', '');

INSERT INTO `mvc_konkurs_druzyny`(`id`, `nazwa`, `punkty`) VALUES ('0','[value-2]','[value-3]');
INSERT INTO `mvc_konkurs_druzyny`(`id`, `nazwa`, `punkty`) VALUES ('1','[value-2]','[value-3]');
INSERT INTO `mvc_konkurs_druzyny`(`id`, `nazwa`, `punkty`) VALUES ('2','[value-2]','[value-3]');
INSERT INTO `mvc_konkurs_druzyny`(`id`, `nazwa`, `punkty`) VALUES ('3','[value-2]','[value-3]');
--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `mvc_konkurs_batalia`
--
ALTER TABLE `mvc_konkurs_batalia`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `mvc_konkurs_druzyny`
--
ALTER TABLE `mvc_konkurs_druzyny`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `mvc_konkurs_pytania`
--
ALTER TABLE `mvc_konkurs_pytania`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mvc_konkurs_batalia`
--
ALTER TABLE `mvc_konkurs_batalia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mvc_konkurs_druzyny`
--
ALTER TABLE `mvc_konkurs_druzyny`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `mvc_konkurs_pytania`
--
ALTER TABLE `mvc_konkurs_pytania`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
