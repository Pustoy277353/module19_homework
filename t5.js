console.log("Задание 5");

class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        this.pluggedIn = true;
        console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
    }

    turnOff() {
        this.pluggedIn = false;
        console.log(`${this.name} выключен.`);
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness() {
        console.log(`${this.name}: Регулировка яркости на уровень ${this.brightness}.`);
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, operatingSystem) {
        super(name, power);
        this.operatingSystem = operatingSystem;
    }

    runOperatingSystem() {
        console.log(`${this.name}: Запуск операционной системы ${this.operatingSystem}.`);
    }
}

const deskLamp = new Lamp('Настольная лампа', 25, 'Высокая');
const desktopComputer = new Computer('Компьютер', 500, 'Windows');

deskLamp.turnOn();
deskLamp.adjustBrightness();

desktopComputer.turnOn();
desktopComputer.runOperatingSystem();

deskLamp.turnOff();
desktopComputer.turnOff();
