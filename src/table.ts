import { writeFile } from "fs/promises"
import { ruleSorter } from "."
import { CombinedRules } from "./types"

export function getAllOrigins(combined: CombinedRules) {
  const origins = new Set<string>()
  for (const rules of Object.values(combined)) {
    for (const origin of Object.keys(rules)) {
      origins.add(origin)
    }
  }

  return Array.from(origins).sort()
}

export async function writeTable(combined: CombinedRules) {
  const columns = getAllOrigins(combined)

  const builder = []
  builder.push(`<table style="font: 12px system-ui">`)
  builder.push("<thead>")
  builder.push(`<th style="width:200px"></th>`)
  columns.forEach((origin) => {
    builder.push(`<th style="width:80px">${origin}</th>`)
  })
  builder.push("</thead>")

  builder.push("<tbody>")
  const ruleNames = Object.keys(combined).sort(ruleSorter)
  for (const ruleName of ruleNames) {
    builder.push("<tr>")
    builder.push(`<th style="text-align:left">${ruleName}</th>`)
    for (const origin of columns) {
      const value = combined[ruleName][origin]
      const level = (value instanceof Array ? value[0] : value) ?? ""
      const bgcolor =
        level === "off"
          ? "#ccc"
          : level === "warn"
            ? "#ffe0ad"
            : level === "error"
              ? "#fdb5bb"
              : "#eee"
      const label = level
        .toString()
        .replace(/^off$/, "✗")
        .replace(/^warn$/, "✓")
        .replace(/^error$/, "✓")
      const plus = value instanceof Array && value.length > 1 ? "+" : ""
      builder.push(
        `<td style="background:${bgcolor};padding:3px 6px">${label}${plus}</td>`
      )
    }
    builder.push("</tr>")
  }
  builder.push("</tbody>")
  builder.push("</table>")

  await writeFile("rules.md", builder.join("\n"))
}
