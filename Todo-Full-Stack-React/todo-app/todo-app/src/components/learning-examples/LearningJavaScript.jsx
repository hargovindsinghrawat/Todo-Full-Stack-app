const person = {
    name: 'hargovind',
    address: {
        line1: 'Baker Street',
        line2: 'Kamaluwaganja'
    },
    profiles: ['instagram', 'twitter', 'whatsapp'],
    funcpro: () => {
        console.log(person.profiles[0])
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>Learning JavaScript</div>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.funcpro()}</div>
        </>
    )
}