import ClassRoom from './0-classroom';

/**
 * تجهيز مصفوفة تحتوي على 3 فصول دراسية بأحجام محددة.
 * @returns {Array} مصفوفة من كائنات ClassRoom.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
