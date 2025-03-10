import dayjs, { type ConfigType } from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";
import "dayjs/locale/ja";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(utc);

const formatDate = (date?: ConfigType, format = "YYYY-MM-DD HH:mm:ss") => {
	return dayjs(date).format(format);
};

export { dayjs, formatDate };
