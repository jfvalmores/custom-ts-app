export default class Helpers {
  isEmpty(value: any): boolean {
    if (Array.isArray(value)) return value.length === 0;

    if (value && typeof value === 'object')
      return Object.keys(value).length === 0;

    return this.gets(value) === '';
  }

  gets(value: any): string {
    const sValue = String(value);
    if (!value && sValue !== '0') return '';

    return sValue;
  }

  getn(value: any): number {
    if (isNaN(value)) return 0;

    return Number(value);
  }

  test() {
    return 'Justine testing!!!';
  }
}
