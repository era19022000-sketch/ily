create table public.date_answers (
 id bigint generated always as identity primary key,
 created_at timestamptz not null default now(),
 step text not null,
 value text not null,
 food text,
 ride text
);
alter table public.date_answers enable row level security;
grant insert on public.date_answers to anon;
grant usage,select on sequence public.date_answers_id_seq to anon;
create policy "allow invite answers" on public.date_answers for insert to anon with check (true);
