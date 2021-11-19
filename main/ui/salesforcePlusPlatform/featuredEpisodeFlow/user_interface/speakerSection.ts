


export async function speakerName(numberOfSpeaker:number){
    return`shadow/ul.speakers-container li:nth-child(${numberOfSpeaker}) .speaker-name`
}
export async function speakerDetail(numberOfSpeaker:number){
    return`shadow/ul.speakers-container li:nth-child(${numberOfSpeaker}) .speaker-card-title`
}

