import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointment {
    const apppointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      apppointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked.');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: apppointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
