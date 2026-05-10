import { uploadPhoto, createUser } from './utils';

/**
 * Calls uploadPhoto and createUser asynchronously.
 * @returns {Object} An object containing the photo and user responses,
 * or an empty object if any function fails.
 */
export default async function asyncUploadUser() {
  const result = {
    photo: null,
    user: null,
  };

  try {
    // تنفيذ العمليتين وانتظار نتائجهما
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    result.photo = photoResponse;
    result.user = userResponse;
  } catch (error) {
    // في حال فشل أي عملية، نعيد كائناً يحتوي على قيم null
    result.photo = null;
    result.user = null;
  }

  return result;
}
