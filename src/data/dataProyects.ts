interface Description {
    title: string;
    body?: string[];
    img?: string[];
}

export interface Item {
    title: string;
    members?:string;
    day?:string;
    img: string;
    desc: Description[];
    imgs?: string[];
    group: string;
}

export interface Category {
    title: string;
    items: Item[];
}

export const items: Category[] = [
    {
        title: "Robotica",
        items: [
            {
                title: "SMART-TEC",
                members:"Franco   Penayo, Elías Patiño, Bruno Isaías",
                img: 'https://github.com/matias-rolon/img-proyectos/blob/main/smart-tec.png?raw=true',
                day: "13/11/2021",
                desc: [
                    {
                        title: 'Acerca del proyecto',
                        body: ['El proyecto es un brazalete que tiene como objetivo enviar E-mails y mensajes predeterminados. También el dispositivo pretende tener una función de calculadora, otra de alarma y reloj en tiempo real. Todo esto para que, dentro de las limitaciones de software, se saque lo menos posible el celular del bolsillo. Para esto se conecta por Bluetooth al celular. También utiliza un teclado, una pantalla y un led.',
                                'El dispositivo, es un brazalete con un armazón un poco voluminoso. Tiene una pantalla Oled con una resolución de 128X64  pixeles , que se utiliza para visualizar los datos y las opciones que se eligen. Tiene un led y un buzzer que se utiliza cuando el dispositivo recibe un mensaje de texto, un email o es hora de una alarma (antes configurada). También tiene un teclado 4X4 que se usa para seleccionar la opciones y activar funciones.',
                                'Por otro lado, posee un microcontrolador  llamado ESP 32. Este se  utiliza  para manejar, controlar todo el hardware y para establecer una conexión vía Bluetooth con el celular.',
                                'Cuando este se conecta al celular, mediante una aplicación  se realiza toda la lógica que se encarga de la administración de datos, la comunicación con el microcontrolador y la lógica del envio de mensajes o emails'],
                    },
                    {
                        title: 'Descripción del hardware',
                        body:['ESP NODE MCU 32-S: ESP32 es un microcontrolador 802.11 b/g/n/e/i de 2.4 GHz compatible con Wi-Fi, pero añade soporte para Bluetooth v4.2 BR/EDR y Bluetooth de baja energía (BLE, BT4.0, Bluetooth Smart) y casi 30 GPIO. El rendimiento en potencia de ESP32, el rendimiento en RF, la robustez, versatilidad, características y confiabilidad hacen que sea la elección ideal para IoT y proyectos relacionados. El ESP32 realiza todas las funciones, desde hacer parpadear un LED hasta publicar datos con servicios web. También puede programarse a través del IDE de Arduino mediante la instalación de la base ESP32 de Arduino.',
                            'PANTALLA OLED: Este Display de 0.96" con controlador SSD1306 y interfaz SPI es ideal para usar con Arduino, compuesto por 128x64 pixeles OLED color blanco funciona sin backlight, por lo que en ambientes oscuros los displays OLED son más brillantes comparados a los LCD.',
                            'Modulo cargador: Cargador para baterias del tipo 18650 y celulares. Funciona con un cargador de 5V de cualquier celular. Con protecion de sobrecarga , corte automatico e indicacion de actividad. Controlador = TP4056. Podes sacarle la ficha usb y entrar por +/- junto a la ficha usb. Full proteccion contra sobre descargas de bateria. Conectar la bateria a = Connect the battery to = B + B -. Insertar el cargador de un celular a la ficha usb :  LED = Rojo->cargando.. Verde->Cargada!',
                            'Batería: Descripción del producto:  Marca: Vapextech | Modelo: 18650 M INDUSTRIAL | Tamaño de la pila: 18650 Forma: Cilíndrica | Voltaje nominal: 3.7V | Es recargable: Si'],
                    },
                    {
                        title: 'ESQUEMATICO Y PCB',
                        img: ['https://github.com/matias-rolon/img-proyectos/blob/main/esquematico-smart-tec.png?raw=true',
                                'https://github.com/matias-rolon/img-proyectos/blob/main/pcb-smart-tec.png?raw=true']
                    },
                    {
                        title: 'DESCRIPCIÓN DEL SOFTWARE',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/codigo-smart-tec.png?raw=true', 
                            'https://github.com/matias-rolon/img-proyectos/blob/main/codigo2-smart-tec.png?raw=true'],
                        body:['El software esta compuesto por 2 códigos, uno es el que se carga al ESP 32 para controlar todo el Hardware. El otro, se le sube a una aplicación de celular. Este controla los datos y se los envía al microcontrolador por bluetooth.',
                            'Código de la aplicación (en diagrama de bloques usando APP inventor 2): La aplicación tiene 12 selectores de contacto y 12 selectores, para enviar mensajes de texto. Tiene 12 casillas de texto para completar con contactos de E-mail, 12 más para completar con el asunto y otras 12 mas para llenar con el mensaje. También tiene una parte para agregar, apagar o borrar alarmas y un reloj en tiempo real. Todas  estas funciones son personalizables desde la aplicación. Una vez que todo está configurado se le mandan los datos solicitados al ESP 32. Desde el ESP se seleccionan los datos que se quieren utilizar, estos se mandan otra vez a la aplicación y esta termina la lógica.',
                            'Codigo ESP32: Las librerias utilizadas y la programacion de las distintas pantallas se pueden ver en la imagen ']
                    },
                    {
                        title: 'CONCLUSIÓN',
                        body:['El proyecto podría haber tenido mucho más funciones y el software podría estar mejor desarrollado. Sin embargo, tiene grandes cualidades como la parte visual, tanto de la pantalla como el armazón. También tiene la gran ventaja de que consume muy poco y es fácil de recargar, haciendo que la energía no sea un problema en lo más mínimo. Por otro lado, tiene un buzzer y un led, que si bien se hacen notar  podrían ser más potentes. Otra cosa que resulto muy bien fue agregarle un pulsador sostenido para prenderlo y apagarlo. Esto no solo sirvió para prender y apagarlo de modo sencillo, sino que también para ahorrar aún más la energía.',
                            'En conclusión, el dispositivo es un simple prototipo, que tiene muchas cosas para mejorar, como reducir el tamaño, remplazar el teclado por 3 botones y también se le podría agregar comunicación wifi para controlar dispositivos electrónicos. Pero sin embargo es funcional y muy útil, más que nada para cuando estas en la calle y queres enviarle un mensaje rápido a una persona.']
                    }
                ],
                group: "group1",
            },
            {
                title: "ARAÑA ROBOTICA",
                members:"Castro Nicolás, Campusano Nicolás, Joaquín Correa",
                img: 'https://github.com/matias-rolon/img-proyectos/blob/main/ara%C3%B1a.png?raw=true',
                day: "10/11/2021",
                desc: [
                    {
                        title: 'Explicación del diseño',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/dise%C3%B1o-ara%C3%B1a.png?raw=true'],
                        body: ['Para definir el modelo del proyecto se tomaron en cuenta diferentes criterios: El material con que se iba a hacer la araña, la economía con la que se contaba, el tiempo y la sencillez para el armado del proyecto. Basándonos en estos criterios fue así como pudimos elegir finalmente el modelo de la Araña donde este fue impreso en 3d, Tal cuenta con 4 patas que constan de 3 servos cada una y con un armazón que nos permite colocar la placa junto con la alimentación.'],
                    },
                    {
                        title: 'Descripción del hardware',
                        body:['Dentro del proyecto la lógica principal la va a manejar el Arduino nano, este es un dispositivo que cuenta con un procesador que es el que va a contener el código y pasárselo a los módulos correspondientes para lograr el funcionamiento.',
                            'Para el movimiento de las araña se utilizan 3 servos por pata  que vendrían a reemplazar las articulaciones. La araña consta con 4 patas por lo tanto 12 servos donde estos van conectados al módulo PCA9685, este módulo está diseñado para poder soportar hasta 16 servos. A su vez este módulo se va a alimentar junto con el Arduino por las pilas 18650.',
                            'Por separado se va a encontrar un módulo HC-05 este tiene la función de poder recibir y enviar datos a través de Bluetooth.  En el proyecto va a tener la función de recibir un dato enviado desde un celular “1” y “2” y va a controlar si la araña avanza o retrocede'],
                    },
                    {
                        title: 'Diagrama en bloque de la programación',
                        img: ['https://github.com/matias-rolon/img-proyectos/blob/main/diagrama-ara%C3%B1a.png?raw=true']
                    },
                    {
                        title: 'Conclución',
                        body:['Al finalizar el proyecto pasamos por muchos problemas y percances que pudimos solucionar y seguir avanzando con el proyecto. Cada vez que nos surgía un problema lo que hacíamos para poder solucionarlo era preguntar a profesores o compañeros y buscar información(Google, libros etc..).',
                            'En conclusión  después de la pandemia y la situación  que tuvimos cada uno, pudimos afrontar el proyecto que nos propusimos y lograr su funcionamiento completo.',
                            'Además teniendo  todos los materiales a disposición es sencillo de hacer el proyecto ya que uno de los principales problemas que se afronta a la hora del armado de un proyecto es la parte económica.']
                    }
                ],
                group: "group1",
            },
            {
                title: "CENTRAL DE ALARMA TFG",
                members:"Fernández Nicolás, Fonseca Ariel, Tarqui Braian",
                img: 'https://github.com/matias-rolon/img-proyectos/blob/main/Alarma-tfg.png?raw=true',
                day: " 1/10/2021",
                desc: [
                    {
                        title: 'Acerca del proyecto',
                        body: ['El proyecto “Alarma Laser GFT” consta de un láser que al ser atravesado por un objeto físico, se acciona el buzzer y comienza a sonar, todo esto esta comandado por un Arduino UNO y el conjunto de pines establecidos.'],
                    },
                    {
                        title: 'Diagrama',
                        img:["https://github.com/matias-rolon/img-proyectos/blob/main/diagrama-alarma-tfg.png?raw=true"]
                    },
                    {
                        title: 'Programación',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/codigo-alarma.png?raw=true'],
                        body:['Estas son las primeras 15 líneas del programa donde en total están compuestas por 312 líneas donde se utilizan las librerías <wire.h> y <LiquidCrystal> al principio del programa. Sirven para: “LiquidCrystal”: esta librería permite que el Arduino controle pantallas display basadas en el chitset Hitachi HD44780, que se encuentra en la mayoría de pantallasLCD. La biblioteca funciona en modo de 4 u 8 bits (4 o 8 líneas) “wire.h”: esta librería permite comunicarse con dispositivos I2C/TWI']
                    },
                    {
                        title: 'Conclusión',
                        body: ['La conclusión sobre este proyecto es que si bien tiene un costo elevado el producto cuenta como un buen nivel de seguridad, y una buena resistencia.A diferencia de otros productos similares, este tiene un cuerpo más rígido y por eso más seguro. Si bien el programa cuenta con 312 líneas, no es un código tan extenso a diferencia de otros. La parte del PCB es relativamente sencilla y la conexión igual. Una de sus futuras mejoras será contar con una batería interna que impide que el equipo se apague cuando no esté conectado a la corriente.  ']
                    }
                ],
                group: "group1",
            },
        ]
    },
    {
        title: "Automatizacion",
        items: [
            {
                title: "DISPENSER AUTOMATICO",
                members: 'Vasconcel Franco, Gonzalez Leandro, Sosa Joaquin, Nicolas Maulin',
                day: '--/--/--',
                img: 'https://github.com/matias-rolon/img-proyectos/blob/main/dispenser-auto.png?raw=true',
                desc: [
                    {
                        title: 'Acerca del proyecto',
                        body:['El objetivo de este proyecto es realizar un sistema de llenado automático de botellas utilizando un Arduino y marcando el progreso de llenado mediante un display LCD. El funcionamiento es el siguiente: se colocan las botellas en las ranuras y se presiona el botón que da inicio a la secuencia de llenado la cual empieza dando un pitido mediante un buzzer, luego se comienza a llenar por el accionar de la bomba de agua y después de un tiempo determinado se corta el flujo de agua, suena un pitido, el motor mueve la base y posteriormente coloca una botella vacía debajo de la manguera, esto se repite hasta que se llenen todas las botellas',]
                    },
                    {
                        title: 'ESQUEMATICO Y DIAGRAMA EN BLOQUE',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/diagrama-dispenser-auto.png?raw=true',
                            'https://github.com/matias-rolon/img-proyectos/blob/main/diagrama2-dispenser-auto.png?raw=true'],
                    },
                    {
                        title: 'PCB Y PLACA 3D',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/3d-dispenser-auto.png?raw=true',
                            'https://github.com/matias-rolon/img-proyectos/blob/main/pcb-dispenser-auto.png?raw=true']
                    },
                    {
                        title: 'DESCRIPCIÓN DE LOS COMPONENTES',
                        body:['Arduino nano: es una placa de desarrollo de tamaño compacto, completa y compatible con protoboards, basada en el microcontrolador ATmega328P.',
                            'Driver Pololu A4988: El driver Pololu A4988 permite controlar motores paso a paso bipolares de hasta 2A. Basado en el chip Allegro A4988.',
                            '2c Display: i2C es un puerto y protocolo de comunicación serial, define la trama de datos y las conexiones físicas para transferir bits entre 2 dispositivos digitales. El puerto incluye dos cables de comunicación, SDA y SCL',
                            'LM7812: Regulador de voltaje que emplea limitación de corriente interna, apagado térmico y protección de área de funcionamiento segura. ... Aunque está diseñado principalmente como regulador de voltaje fijo, este dispositivo se puede utilizar con componentes externos para voltajes y corrientes ajustables',
                            'LM7805: El LM7805 es un circuito integrado cuya finalidad es mantener un voltaje estable de 5V en su pin de salida independientemente del voltaje aplicado a su pin de entrada.']
                    },
                    {
                        title: 'CONLUSIONES Y SUGERENCIAS',
                        body: ['Creemos que este proyecto es una versión básica de lo que puede ser un dispenser automático, en un caso hipotético, la visión a futuro seria poder fabricar este dispenser de manera más eficaz e ir mejorando algunas cuestiones, como lo visual, la capacidad de las botellas, tener un presupuesto mayor y poder adquirir los componentes de mayor calidad',]
                    }
                ],
                group: "group1",
            },
            {
                title: "AUTO SMART",
                members: 'Maximiliano Barzola, Dal Degan Santiago',
                day: '12/11/2021',
                img: 'https://github.com/matias-rolon/img-proyectos/blob/main/auto-smart.png?raw=true',
                desc: [
                    {
                        title: 'Acerca del proyecto',
                        body:['El proyecto consiste en un pequeño auto el cual mediante una cámara puede detectar los límites de una pista y de esa manera mantenerse autónomo. Para esto utiliza un Raspberry pi 3 B+ y un PCB',
                            'El PCB se conecta con una Raspberry Pi 3 B+ a través de sus pines GPIO. El PCB tiene la función de controlar los motores, alimentar a su microcontrolador propio (en este caso ESP32) y al Raspberry pi. La placa también tiene la capacidad de controlarse de forma autónoma, ya que en realidad su objetivo es aislar el Raspberry pi del resto del circuito, ya que nada más las conexiones que tiene el R pi es con los GPIO de comunicación serie y la alimentación. El PCB tendrá incluso la capacidad de ser controlado de forma inalámbrica, tanto por Bluetooth o WIFI.']
                    },
                    {
                        title: 'Especificaciones del hardware:',
                        body: ['Para el hardware se optó por usar el pequeño autito Robobloq que fue donado por el estado a la escuela, de esta manera el presupuesto sería altamente reducido. De la misma manera la cámara fue elegida para reducir costos, se utiliza la cámara de una laptop la cual no tiene ninguna diferencia con una cámara usb normal a excepción de la carcasa. Este mismo proceso de reducción de presupuesto también fue utilizado para el uso del Raspberry pi 3 B+ el cual también fue provisionado por la escuela. El único componente que no fue elegido por su costo fue el ESP32 el cual fue elegido por su gran versatilidad.']
                    },
                    {
                        title: 'PCB',
                        body: ['Por el lado del PCB, empezado por la alimentación, primero nos encontramos con un Jack de alimentación, el cual se utilizará para conectar con una batería 3s. El mismo conector se tiene un divisor de tensión el cual se lo utiliza para sensar la tensión de entrada, lo que permite saber el estado de la carga de las baterías. Luego de esto se encuentra un mosfet el cual su principal función es proteger al circuito contra la inversión de polaridad. A la salida del mosfet se conectan a dos step down, precisamente a los MP1584, los cuales tienen la característica de soportar 3A y hasta un 96% por ciento de eficiencia. Uno de los conversores step down se utiliza para 7,4V a los motores y el otro para alimentar al Raspberry pi y el NodeMCU con 5V.',
                            'Luego se encuentra toda la parte de control, en la cual se encuentra integrado el NodeMCU-32, el puente H DRV8833 y unos conversores de nivel. El ESP32 se encargaría de cambiar la velocidad de los motores y su dirección, a parte de proporcionar información del estado de la batería y varias cosas más al Raspberry. El puente H que se utiliza tiene la capacidad de soportar 10.8V y una corriente de 1,5A y 2A de pico por canal. Si bien el DRV8833 tiene internamente resistores pull down, se le agregaron también de manera externa para mayor seguridad. Para poder leer el canal de los encoders de los motores, se utilizan los conversores de nivel, los cuales sirven para adaptar la lógica de 5V de los encender a los 3V3 de ESP32. Por último se encuentran cuatro conectores, de los cuales el conector 2X20 es para conectar la alimentación, los pines para la alimentación Uart, I2c y Spi al Raspberry. Los otros dos conectores de 6 pines son para los motores, y el último tiene los pines que no se utilizan en la placa para poder incorporar algún sensor de manera externa (también estos pines tienen unos de alimentación con fusibles reseteables).'],
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/pcb-smart.png?raw=true',
                            'https://github.com/matias-rolon/img-proyectos/blob/main/pcb-smart2.png?raw=true']
                    },
                    {
                        title: 'Software',
                        img:['https://github.com/matias-rolon/img-proyectos/blob/main/codigo-smart.png?raw=true'],
                        body:['El software en el Raspberry pi 3 es un código escrito en python 3 el cual utilizando la librería OpenCV reconoce los cambios de colores abruptos y en el caso de una pista puede reconocer límites demarcados por líneas, o los límites de las curvas donde haya pianos. Una vez detectado esto, busca diferencias grandes en el eje vertical y así lograr detectar las curvas y marcarlas como una sola recta. Ya que una cámara simple como la usada tiene una perspectiva 2D es muy importante tener eso en cuenta y pensar cómo es que en determinadas situaciones la cámara interpretara lo visto ya que todo nuestro procesamiento será hecho en 2D. Por lo tanto en el caso de que se este derecho en la pista se tendrá una sola recta en la parte superior del sensor a 0º. Pero en cuanto una curva se aproxima el cambio de repentino de límite será detectado y será tomado el ángulo de la recta, una vez tomados todos los ángulos de todas las rectas en la pantalla serán unidas matemáticamente y así lograr un solo ángulo el cual será entregado al microcontrolador para controlar el auto. Este código fue basado en la detección de objetos hecho por BigFace83']
                    },
                    {
                        title:'Simulación',
                        img: ['https://github.com/matias-rolon/img-proyectos/blob/main/camara-auto-smart.png?raw=true',
                            'https://github.com/matias-rolon/img-proyectos/blob/main/consola-auto-smart.png?raw=true'],
                        body:['En la imagen se puede observar cómo detecta los bordes y dibuja rectas en ellos, luego calcula el ángulo de las rectas. En este caso para testear fue usado un video stock el cual tiene la marca de agua.',
                            'Como se puede observar en la consola los últimos valores entregados por el código son cercanos al 0 marcando que la calle enfrente es recta lo cual se puede observar en la imagen superior.']
                    },
                    {
                        title:'Conclusión',
                        body:['Del lado del hardware, al conectar todos los pines de comunicación serie posibles permite una mayor versatilidad a la hora de programar, además que al llevar al exterior los pines restantes permite el hecho de poder incorporar más funciones al proyecto. Las cosas de la cuales habría que cambiar seria primero el step down que alimenta el Raspberry, ya que si bien la corriente puede ser soportada por el que ya tiene, si se quiere cambiar el modelo del Raspberry pi 3 a un 4, no sería posible ya que este último necesita una corriente mayor. Otra de las cosas que habría que incorporar sería un switch para poder apagar el robot a la hora de programarlo. También tendría que ser reemplazado el jack de alimentación por un conector de baterías lipo.',
                            'Por otro lado también pudimos concluir que este proyecto no fue el adecuado para hacer en un año como este, que fue parcialmente digital. No pudimos terminarlo como queríamos, no solo por la falta de habilidad sino también por la falta de tiempo. En la escuela errores como estos son permitidos sin embargo esto nos muestra que clases de proyectos podemos tomar conociendo nuestro tiempo.']
                    }
                ],
                group: "group1",
            },
            {
                title: "IOT",
                members: 'Romero Gabriel, Rolon Matias',
                day: '12/11/2022',
                img: 'https://matias-rolon.github.io/pagina_IoT.github.io/WhatsApp%20Image%202022-11-24%20at%2014.13.13.jpeg',
                desc: [
                    {
                        title: 'Acerca del proyecto',
                        img:['https://matias-rolon.github.io/pagina_IoT.github.io/WhatsApp%20Image%202022-11-24%20at%2014.13.14.jpeg'],
                        body:['Esta placa consiste en una serie de cuatro relays, controlados por la placa de desarrollo ESP32. Estos relays son los actuadores, a los cuales se conectan el o los dispositivos que se desea controlar a través de WIFI. Para esto, el microcontrolador se conecta a una base de datos para poder obtener la informacion de la nube que se necesita, en este caso se utilizó Firebase para hacerlo. Ademas de esto la placa cuenta con dos borneras para poder incorporar un sensor de iluminación y otro de temperatura.']
                    },
                    {
                        title: 'Esquematico de la placa principal:',
                        img:['https://matias-rolon.github.io/pagina_IoT.github.io/Captura%20de%20pantalla%202022-11-24%20152336.png']
                    },
                    {
                        title: 'Esquematico del modulo de temperatura:',
                        img:['https://matias-rolon.github.io/pagina_IoT.github.io/LM35.png']
                    },
                    {
                        title: 'Esquematico del modulo de iluminación:',
                        img:['https://matias-rolon.github.io/pagina_IoT.github.io/LDR.png'],
                    },
                    {
                        title:'Aplicaciones',
                        body:['Domótica: La domótica refiere a las tecnologías que se orientan al control y la automatización inteligente de la vivienda. La app que se hizo fue pensada para poder controlar los dispositivos conectados activandolos o desactivandolos de forma manual o automaticamente, controlados, en este caso, mediante los sensores de temperatura e iluminación conectados.',
                            'Semaforo: En este caso se aplico el proyecto a un semaforo, el cual se controla por una opcion que prende y apaga las luces de forma manual o de forma autamatica indicandole el tiempo que se necesita que cada luz este prendida.']
                    }
                ],
                group: "group1",
            }
        ]
    },
    {
        title: "Sistemas",
        items: [
            
        ]
    }
]