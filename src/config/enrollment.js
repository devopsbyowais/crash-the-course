// Google Apps Script Web App that receives course registrations and routes
// each student to the correct Google Spreadsheet.
//
// The endpoint is deployed with "Anyone" access, so it answers cross-origin
// POSTs with a redirect to script.googleusercontent.com. A browser therefore
// cannot read the response body (no CORS headers on the redirect target),
// which is why the form is delivered through a native POST into a hidden
// iframe instead of fetch(). See EnrollmentForm.jsx for the details.
//
// The Apps Script expects exactly these parameter names:
//   studentName, email, phone, course
// and the "course" value must be one of the two course names below so the
// script can pick the matching spreadsheet.
export const ENROLLMENT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzg2NM1G3lckz7r7RM3lX4_dcWSo3YUSI1JDA0Tr2aOR0WbBxpRNj5Vt5T_QcoKvqzq0-/exec';

// Spreadsheets the Apps Script writes to (routing is handled by the script).
export const ENROLLMENT_SHEETS = {
  'SaaS Entrepreneurship': '12RHpogqiod8SjUC_yaeC6EcpNht6J2Rf-AfQ-Nmqo48',
  'Shopify Local & International': '1WppcT_8NGbezOtPDgoXeScBUV6TFRGmqejeqEWcBkjU',
};
