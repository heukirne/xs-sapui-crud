var email = $.request.parameters.get('EMAIL');

var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement( "delete from NEO_ALIEN.PERSONAL where EMAIL=?" );
//pstmt.setString(1,email);  
pstmt.setString(1,email);
pstmt.execute();  
conn.commit();  
$.response.contentType = 'text/plain';
    $.response.setBody('Data Deleted');
    $.response.status = 200; 
var rs = pstmt.executeQuery();

/*
Test :
./contacts/deletedata.xsjs?email=jenizar@hotmail.com
*/
