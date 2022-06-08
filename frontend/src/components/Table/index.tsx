import { TableHTMLAttributes } from "react";
import styles from "./Table.module.scss";

export function TableHeader({
	children,
	...props
}: TableHTMLAttributes<HTMLTableCellElement>) {
	return (
		<th className={styles.tableHeader} {...props}>
			{children}
		</th>
	);
}

export function TableRow({
	children,
	...props
}: TableHTMLAttributes<HTMLTableRowElement>) {
	return (
		<tr className={styles.tableRow} {...props}>
			{children}
		</tr>
	);
}

export function TableCell({
	children,
	...props
}: TableHTMLAttributes<HTMLTableCellElement>) {
	return (
		<td className={styles.tableCell} {...props}>
			{children}
		</td>
	);
}

function Table({ children, ...props }: TableHTMLAttributes<HTMLTableElement>) {
	return (
		<table className={styles.table} {...props}>
			{children}
		</table>
	);
}

export default Table;
