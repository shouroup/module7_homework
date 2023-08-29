
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function () {
    this.isPluggedIn = true;
    console.log(`${this.name} включен.`);
};

ElectricalAppliance.prototype.unplug = function () {
    this.isPluggedIn = false;
    console.log(`${this.name} выключен.`);
};

function Lamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(ElectricalAppliance.prototype);

function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);

const deskLamp = new Lamp("Настольная лампа", 10, "high");
const desktopComputer = new Computer("Компьютер", 150, "Dell");

deskLamp.plugIn();
desktopComputer.plugIn();

function calculateTotalPower(...appliances) {
    let totalPower = 0;
    appliances.forEach(appliance => {
        if (appliance.isPluggedIn) {
            totalPower += appliance.power;
        }
    });
    return totalPower;
}

const totalPower = calculateTotalPower(deskLamp, desktopComputer);
console.log(`Суммарная потребляемая мощность: ${totalPower} Вт`);