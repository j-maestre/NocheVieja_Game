// dia 29

const pistaPadel = "07/01/1768"

const clavePadel ="Pepe botella"
const clavePozo ="Ves i comprat un piano"

const claveLaberinto = 19
const claveSpoty = "Mondongo"

const map1_coord = "38.7997903,-0.6120728";
const map2_coord = "38.8206086,-0.597979";
const map3_coord = "41.6527779,-0.8801563";


const maps_1_link = "https://www.google.es/maps/@38.7997903,-0.6120728,3a,75y,157.62h,72t/data=!3m8!1e1!3m6!1sAF1QipPqYS6fkU8QhQrFo10LOeaE4MS5fqcn3yYbPJG4!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPqYS6fkU8QhQrFo10LOeaE4MS5fqcn3yYbPJG4%3Dw203-h100-k-no-pi-0-ya182.22455-ro0-fo100!7i6000!8i3000?entry=ttu";
const maps_2_link = "https://www.google.es/maps/@38.8206086,-0.597979,3a,75y,307.63h,90.86t/data=!3m7!1e1!3m5!1sl1dXQeCmTyJACwyAg_hiDg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dl1dXQeCmTyJACwyAg_hiDg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D97.51202%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=ttu";
const maps_3_link = "https://www.google.com/maps/@41.6527779,-0.8801563,3a,75y,318.45h,101.26t/data=!3m6!1e1!3m4!1s3XT7n51Gfj6LDIDg2upeaw!2e0!7i13312!8i6656?entry=ttu";


const crucigrama = "https://puzzel.org/es/crossword/play?p=-NmVirvslgwA8uhhAs2A";

// Rafa
// Primero a la fuente, luego 
// En la cocina giro sin cesar, libero fragancias y humos al cocinar
// Con jugadores que no dan un paso, en mi campo de madera, el gol es el rey del espacio
// Soy el corazón ardiente de tu morada, con mi danza de llamas y humo
// Si la clave quieres encontrar, los minutos y las horas deberas sumar y por 100 deberas multiplicar   


// laberinto 19 lineas rectas en total

let password_position = [20];

password_position[0] = 4; // cero
password_position[1] = 3; // uno
password_position[2] = 3; // dos
password_position[3] = 4; // tres
password_position[4] = 6; // cuatro
password_position[5] = 5; // cinco
password_position[6] = 4; // seis
password_position[7] = 5; // siete
password_position[8] = 4; // ocho NO
password_position[9] = 5; // nueve
password_position[10] = 4; // diez
password_position[11] = 4; // once
password_position[12] = 4; // doce
password_position[13] = 5; // trece
password_position[14] = 7; // catorce NO
password_position[15] = 6; // quince
password_position[16] = 9; // dieciseis
password_position[17] = 10; // diecisiete
password_position[18] = 9; // dieciocho NO
password_position[19] = 10; // diecinueve
password_position[20] = 5; // veinte
