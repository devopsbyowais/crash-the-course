// Google Apps Script Web App that receives course registrations and routes
// each student to the correct Google Spreadsheet.
//
// The endpoint is deployed with "Anyone" access. It answers a POST with a 302
// redirect to script.googleusercontent.com/macros/echo and both hops send
// "access-control-allow-origin: *", so a plain CORS POST can read the script
// output ("Registration successful!"). That is how the form verifies a
// registration instead of guessing. If the response cannot be read, the form
// falls back to a native POST into a hidden iframe, which always delivers the
// request but cannot be verified - the UI then says the request was sent
// rather than that the registration was recorded.
//
// The Apps Script expects exactly these parameter names:
//   studentName, email, phone, course
// and the "course" value must be one of the two course names below so the
// script can pick the matching spreadsheet.
export const ENROLLMENT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzg2NM1G3lckz7r7RM3lX4_dcWSo3YUSI1JDA0Tr2aORwBxpRNj5Vt5T_QcoKvqzq0-/exec';

// Spreadsheets the Apps Script writes to (routing is handled by the script).
export const ENROLLMENT_SHEETS = {
  'SaaS Entrepreneurship': '12RHpogqiod8SjUC_yaeC6EcpNht6J2Rf-AfQ-Nmqo48',
  'Shopify Local & International': '1WppcT_8NGbezOtPDgoXeScBUV6TFRGmqejeqEWcBkjU',
};
