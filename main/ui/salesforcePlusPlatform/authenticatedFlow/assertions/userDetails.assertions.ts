var Assertion = require('soft-assert/lib/assertion')

export async function verifySignupRecordFromDatabase(signupParameters, signupRecord) {
    await Assertion.softAssert(signupParameters.companySize, signupRecord.records.Company_Size__c, "signup record Company_Size assertion failed", [])
    await Assertion.softAssert(signupParameters.country, signupRecord.records.Country__c, "signup record Country assertion failed", [])
    await Assertion.softAssert(signupParameters.firstName, signupRecord.records.First_Name__c, "signup record firstName assertion failed", [])
    await Assertion.softAssert(signupParameters.phoneNumber, signupRecord.records.Work_Number__c, "signup record Work_Number assertion failed", [])
    await Assertion.softAssert(signupParameters.jobRole, signupRecord.records.Job_Role__c, "signup record Job_Role assertion failed", [])
    await Assertion.softAssert(signupParameters.state, signupRecord.records.State__c, "signup record State assertion failed", [])
    await Assertion.softAssert(signupParameters.lastName, signupRecord.records.Last_Name__c, "signup record Last_Name assertion failed", [])
    await Assertion.softAssert(signupParameters.companyName, signupRecord.records.Company_Name__c, "signup record Company_Name assertion failed", [])
    await Assertion.softAssert(signupParameters.jobTitle, signupRecord.records.Job_Title__c, "signup record Job_Title assertion failed", [])
    await Assertion.softAssert(`${signupParameters.countryCode} ${signupParameters.phoneNumber}`, signupRecord.records.Mobile_Number__c, "signup record Mobile_Number assertion failed", [])
    await Assertion.softAssertAll()
}
