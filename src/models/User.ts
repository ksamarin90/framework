import axios, { AxiosResponse } from "axios";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) { }

    get(propName: string): (string | number) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((res: AxiosResponse): void => {
                this.set(res.data);
            })
    }

    save(): void {
        const id = this.get('id')
        const url = `http://localhost:3000/users`
        if (id) {
            axios.put(`${url}/${id}`, this.data);
        } else {
            axios.post(url, this.data)
        }
    }

}


