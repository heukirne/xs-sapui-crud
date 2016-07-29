var firstname = $.request.parameters.get('FIRSTNAME');
var lastname = $.request.parameters.get('LASTNAME');
var age = $.request.parameters.get('AGE');
var address = $.request.parameters.get('ADDRESS');
var email = $.request.parameters.get('EMAIL');

var conn = $.db.getConnection();  
 var pstmt = conn.prepareStatement( "update NEO_ALIEN.PERSONAL set FIRSTNAME=?, LASTNAME=?, AGE=?, ADDRESS=? where EMAIL=?" );
//pstmt.setString(1,email);  
pstmt.setString(1,firstname);  
pstmt.setString(2,lastname); 
pstmt.setString(3,age);
pstmt.setString(4,address);
pstmt.setString(5,email);
pstmt.execute();  
conn.commit();  
$.response.contentType = 'text/plain';
    $.response.setBody('Data Updated');
    $.response.status = 200;   
    
/*
Test:
https://s2hanaxs.hanatrial.ondemand.com/p1146569trial/test1/Contacts/editdata.xsjs?email=jenizar@example.com&firstname=john&lastname=eswin&age=41&address=Jakarta        
*/
