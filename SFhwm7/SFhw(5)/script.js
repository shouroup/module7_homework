class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluggedIn = false;
    }

    plugIn() {
        this.isPluggedIn = true;
        console.log(`${this.name} включен.`);
    }

    unplug() {
        this.isPluggedIn = false;
        console.log(`${this.name} выключен.`);
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }
}

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