// domyślne ustawienia
PATH_TO_POMA = 'http://localhost/projekty/poma_v3'; //ścieżka do folderu przez localhosta
USE_SWEETALERT = true; // czy używać customowego wyglądu pry zaczynaniu konkursu
DISABLE_TEAMS = true; // czy wyłączać przyciski dla drużyn które nie grają (przy wybieraniu pytania, ręcznego ustawiania punktów)
POINTS_AUTOMAT = true; //czy punkty dodają się automatycznie po kliknięciu że poprawna odpowiedź czy trzeba manulanie zmienić
// V NIE ZMIENIAĆ V
GLOBAL_ILOSC_DRUZYN = 0;
TICK_VOL = 0.25;
BELL_VOL = 1;
POWERUP_1_VOL = 1;
POWERUP_2_VOL = 0.9;
FAIL_VOL = 0.35;
TRABKA_VOL = 1;


// Function to get volume values - returns stored values from settings or defaults if not set
function getVolumeValue(volumeType) {
    // Check if we have stored values from settings.js
    if (typeof window.STORED_TICK_VOL !== 'undefined') {
        switch(volumeType) {
            case 'tick': 
                return window.STORED_TICK_VOL;
            case 'bell':
                return window.STORED_BELL_VOL;
            case 'powerup_1':
                return window.STORED_POWERUP_1_VOL;
            case 'powerup_2':
                return window.STORED_POWERUP_2_VOL;
            case 'fail':
                return window.STORED_FAIL_VOL;
            case 'trabka':
                return window.STORED_TRABKA_VOL;
            default:
                return 1; // Default volume
        }
    } else {
        // Return default values from variables above
        switch(volumeType) {
            case 'tick': 
                return TICK_VOL;
            case 'bell':
                return BELL_VOL;
            case 'powerup_1':
                return POWERUP_1_VOL;
            case 'powerup_2':
                return POWERUP_2_VOL;
            case 'fail':
                return FAIL_VOL;
            case 'trabka':
                return TRABKA_VOL;
            default:
                return 1; // Default volume
        }
    }
}