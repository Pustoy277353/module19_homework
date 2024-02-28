console.log("Задание 4")

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricalAppliance.prototype.turnOn = function () {
    this.pluggedIn = true;
    console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт`);
};

ElectricalAppliance.prototype.turnOff = function () {
    this.pluggedIn = false;
    console.log(`${this.name} выключен.`);
};

function Lamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function () {
    console.log(`${this.name}: Регулировка яркости на уровень ${this.brightness}.`);
};

function Computer(name, power, operatingSystem) {
    ElectricalAppliance.call(this, name, power);
    this.operatingSystem = operatingSystem;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.runOperatingSystem = function () {
    console.log(`${this.name}: Запуск операционной системы ${this.operatingSystem}.`);
};

const deskLamp = new Lamp('Настольная лампа', 25, 'Высокая');
const desktopComputer = new Computer('Компьютер', 500, 'Windows');

deskLamp.turnOn();
deskLamp.adjustBrightness();

desktopComputer.turnOn();
desktopComputer.runOperatingSystem();

deskLamp.turnOff();
desktopComputer.turnOff();